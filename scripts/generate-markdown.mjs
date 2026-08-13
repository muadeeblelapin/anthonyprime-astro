/**
 * generate-markdown.mjs
 * Génère une version Markdown de chaque page HTML après `astro build`
 * pour la "Markdown Negotiation" (agents IA : Accept: text/markdown).
 *
 * Usage : node scripts/generate-markdown.mjs [distDir]
 * Le HTML reste servi par défaut aux navigateurs ; nginx sert le .md
 * quand un agent demande explicitement du Markdown.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const distDir = process.argv[2] || join(process.cwd(), "dist");

/** Liste récursive des .html sous distDir */
function listHtml(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) listHtml(full, out);
    else if (entry.endsWith(".html") && entry !== "404.html") out.push(full);
  }
  return out;
}

/** Décodage entités HTML */
function decodeEntities(s) {
  const map = {
    nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'",
    eacute: "é", egrave: "è", ecirc: "ê", euml: "ë", agrave: "à", acirc: "â",
    ocirc: "ô", ucirc: "û", ugrave: "ù", ccedil: "ç", iuml: "ï", ouml: "ö",
    laquo: "«", raquo: "»", hellip: "…", rsquo: "'", lsquo: "'", euro: "€",
    deg: "°", times: "×", ndash: "–", mdash: "—",
  };
  return s.replace(/&(#?[a-zA-Z0-9]+);/g, (_, e) => {
    if (e.startsWith("#x")) return String.fromCodePoint(parseInt(e.slice(2), 16));
    if (e.startsWith("#")) return String.fromCodePoint(parseInt(e.slice(1), 10));
    return map[e] ?? _;
  });
}

/** Balises de bloc qui terminent la ligne courante */
const BLOCK_TAGS = new Set([
  "p", "div", "section", "article", "header", "footer", "figure", "figcaption",
  "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote", "tr", "ul", "ol",
  "form", "table", "tbody", "thead", "dl", "dt", "dd", "details", "summary",
]);

function htmlToMarkdown(html) {
  let h = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<noscript>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, " ")
    .replace(/<template[\s\S]*?<\/template>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");

  const md = [];
  const tokens = h.match(/<\/?[a-zA-Z][^>]*>|[^<]+/g) || [];
  const stack = [];        // inline : {type:'a'|'strong'|'em'|'code', href?}
  const lists = [];        // niveaux de liste : 'ul'|'ol'
  let cur = "";            // contenu de la ligne courante
  let prefix = "";         // préfixe (titre, puce, citation)

  const flush = () => {
    let line = (prefix + cur).replace(/\s+/g, " ").trim();
    // retirer les liens vides [ ](...)
    line = line.replace(/\[[ \t]*\]\([^)]*\)/g, "").replace(/\s{2,}/g, " ");
    if (line) md.push(line);
    cur = "";
    prefix = "";
  };

  const wrapInline = (text) => {
    // appliquer les marqueurs de la pile (du plus récent au plus ancien)
    for (const s of [...stack].reverse()) {
      if (s.type === "a") text = `[${text}](${s.href})`;
      else if (s.type === "strong") text = `**${text}**`;
      else if (s.type === "em") text = `*${text}*`;
      else if (s.type === "code") text = `\`${text}\``;
    }
    return text;
  };

  const listIndent = () => "  ".repeat(Math.max(0, lists.length - 1));

  for (const tok of tokens) {
    if (tok.startsWith("</")) {
      const tag = tok.slice(2, -1).trim().split(/\s/)[0].toLowerCase();
      if (tag === "a" || tag === "strong" || tag === "b" || tag === "em" || tag === "i" || tag === "code") {
        const idx = stack.map((s) => s.type).lastIndexOf(tag === "b" ? "strong" : tag === "i" ? "em" : tag);
        if (idx >= 0) stack.splice(idx, 1);
      } else if (BLOCK_TAGS.has(tag)) {
        flush();
        if (tag === "ul" || tag === "ol") lists.pop();
      } else if (tag === "br") {
        cur += " ";
      }
      continue;
    }

    if (tok.startsWith("<")) {
      const m = tok.match(/^<([a-zA-Z0-9]+)([^>]*)>/);
      if (!m) continue;
      const tag = m[1].toLowerCase();
      const attrs = m[2] || "";

      if (tag === "br") { cur += "  \n"; continue; }
      if (tag === "hr") { flush(); md.push("---"); continue; }
      if (tag === "img") {
        const src = (attrs.match(/src="([^"]*)"/) || [])[1] || "";
        const alt = (attrs.match(/alt="([^"]*)"/) || [])[1] || "";
        if (src && !src.startsWith("data:")) cur += wrapInline(`![${alt}](${src})`) + " ";
        continue;
      }
      if (tag === "a") {
        const href = (attrs.match(/href="([^"]*)"/) || [])[1] || "";
        stack.push({ type: "a", href });
        continue;
      }
      if (tag === "strong" || tag === "b") { stack.push({ type: "strong" }); continue; }
      if (tag === "em" || tag === "i") { stack.push({ type: "em" }); continue; }
      if (tag === "code") { stack.push({ type: "code" }); continue; }
      if (/^h[1-6]$/.test(tag)) {
        flush();
        // ligne vide avant un titre (exigence CommonMark)
        if (md.length && md[md.length - 1] !== "") md.push("");
        prefix = "#".repeat(parseInt(tag[1])) + " ";
        continue;
      }
      if (tag === "li") {
        flush();
        const parent = lists[lists.length - 1];
        const bullet = parent === "ol" ? "1." : "-";
        prefix = listIndent() + bullet + " ";
        continue;
      }
      if (tag === "ul" || tag === "ol") { flush(); lists.push(tag); continue; }
      if (tag === "blockquote") { flush(); prefix = "> "; continue; }
      if (tag === "td" || tag === "th") { flush(); cur = cur; prefix = ""; cur += " | "; continue; }
      if (tag === "tr") { flush(); continue; }
      if (BLOCK_TAGS.has(tag)) { flush(); continue; }
      if (tag === "input" || tag === "button" || tag === "select" || tag === "textarea" ||
          tag === "option" || tag === "label") { continue; }
      // span, small, abbr, sup, sub, strong… : inline, on continue
      continue;
    }

    // Token texte
    let text = decodeEntities(tok);
    if (text.trim()) cur += wrapInline(text);
  }
  flush();

  let out = md.join("\n");
  out = out.replace(/[ \t]+\n/g, "\n");
  out = out.replace(/\n{3,}/g, "\n\n");
  out = out.replace(/\n+$/g, "\n");
  // espaces avant ]( : [ 06 ...] → [06 ...]
  out = out.replace(/\[\s+/g, "[").replace(/\s+\]\(/g, "](");
  return out.trim() + "\n";
}

/** Extrait <title> et <meta name="description"> */
function extractHead(html) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  return { title: decodeEntities(title.trim()), desc: decodeEntities(desc.trim()) };
}

/** URL canonique de la page */
function canonicalUrl(htmlPath) {
  const rel = relative(distDir, htmlPath).replace(/\\/g, "/").replace(/index\.html$/, "").replace(/\.html$/, "");
  return `https://www.anthonyprime.fr/${rel}`;
}

function build() {
  const pages = listHtml(distDir);
  let count = 0;
  const errors = [];

  for (const page of pages) {
    try {
      const html = readFileSync(page, "utf8");
      const { title, desc } = extractHead(html);
      const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
      const body = mainMatch ? mainMatch[1] : html;
      const contentMd = htmlToMarkdown(body);

      const mdPath = page.replace(/\.html$/, ".md");
      const header = [
        `# ${title}`,
        "",
        `> ${desc}`,
        "",
        `Source : ${canonicalUrl(page)}`,
        "",
        "---",
        "",
      ].join("\n");

      mkdirSync(dirname(mdPath), { recursive: true });
      writeFileSync(mdPath, header + contentMd);
      count++;
    } catch (e) {
      errors.push(`${page}: ${e.message}`);
    }
  }

  console.log(`Markdown généré : ${count} pages (${pages.length} HTML trouvés)`);
  if (errors.length) {
    console.error("Erreurs :");
    for (const err of errors) console.error(" -", err);
    process.exitCode = 1;
  }
}

build();
