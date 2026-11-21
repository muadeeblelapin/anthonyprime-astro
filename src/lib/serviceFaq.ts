// FAQ par page service.
//
// Une seule FAQ par page, et des contenus volontairement distincts d'une page à
// l'autre : un balisage FAQPage recopié à l'identique est ignoré par Google.
// `services.ts` fusionne ces tableaux dans le champ `faq` de chaque service ;
// la section visible (`[service].astro`) et le JSON-LD suivent automatiquement.
//
// Chiffres validés par Anthony : 50 € HT/h en dépannage, intervention sous
// 24 heures hors week-end et jours fériés, rayon de 40 km autour de Saint-James.
// Les forfaits d'entretien sont recopiés à l'identique depuis `services.ts`.

type FaqItem = { question: string; answer: string }

export const SERVICE_FAQS: Record<string, FaqItem[]> = {
  "depannage-urgence": [
    {
      question: "Sous quel délai intervenez-vous pour un dépannage ?",
      answer:
        "Le délai d'intervention est de moins de 24 heures, hors week-end et jours fériés. Le plus rapide reste l'appel direct au 06 74 98 15 99 : au téléphone, je qualifie la panne avec vous et je fixe un créneau. Une fuite qui s'aggrave ou une panne de chauffage en plein hiver ne doivent pas attendre, donc ne restez pas sur un message sans réponse.",
    },
    {
      question: "Combien coûte une intervention de dépannage ?",
      answer:
        "L'intervention est facturée 50 € HT de l'heure. Ce tarif couvre la main-d'œuvre ; les pièces et fournitures nécessaires s'ajoutent et vous sont annoncées avant que je commence. Vous savez donc à quoi vous en tenir avant de dire oui, et rien ne démarre sans votre accord.",
    },
    {
      question: "Quels types de pannes prenez-vous en charge ?",
      answer:
        "Fuite d'eau et recherche de fuite, panne de chaudière gaz ou fioul, panne de pompe à chaleur, coupure électrique, tableau qui disjoncte, chauffe-eau hors service. Comme je suis plombier, chauffagiste et électricien, la même visite peut traiter les trois domaines : si la panne de chauffage vient de l'alimentation électrique, je ne repasse pas la main à une autre entreprise.",
    },
    {
      question: "Intervenez-vous en dehors de Saint-James ?",
      answer:
        "Oui, dans un rayon de 40 km autour de Saint-James (50240) : Avranches, Ducey, Pontorson, Granville, Saint-Hilaire-du-Harcouët, Antrain, Fougères, Saint-Georges-de-Reintembault et les communes alentour, côté Manche et Ille-et-Vilaine.",
    },
    {
      question: "Que faire en attendant votre arrivée ?",
      answer:
        "Pour une fuite d'eau, fermez le robinet d'arrêt général et épongez : ne tentez pas de colmater sous pression. Pour une coupure électrique, coupez le disjoncteur concerné et ne le réenclenchez pas à répétition. Pour une chaudière qui fuit ou une odeur de gaz, arrêtez l'appareil, aérez et appelez immédiatement ; en cas d'odeur de gaz, contactez aussi le service d'urgence de votre fournisseur de gaz.",
    },
  ],

  "renovation-salle-de-bains": [
    {
      question: "Quel budget prévoir pour rénover une salle de bains ?",
      answer:
        "Il n'y a pas de tarif type : le prix dépend entièrement de ce qu'il y a à faire. Cinq éléments font varier la facture — l'état de l'existant (tout reprendre ou remplacer seulement les équipements), la surface de la pièce, le nombre d'équipements (douche, baignoire, WC, double vasque), l'accessibilité du logement et des réseaux, et le choix du matériel, du premier prix au haut de gamme. C'est pourquoi je ne donne pas de fourchette au téléphone : la visite et le devis, gratuits, chiffrent votre projet poste par poste.",
    },
    {
      question: "Qu'est-ce qui est inclus dans une rénovation clé en main ?",
      answer:
        "Tout le chantier de la pièce : dépose de l'existant, plomberie (alimentation, évacuations, pose des sanitaires et de la robinetterie), électricité (éclairage, prises, raccordement des équipements), pose du mobilier, finitions et joints. Le carrelage et la peinture sont coordonnés dans le même planning, et les gravats sont évacués en fin de chantier. Vous n'avez qu'un seul interlocuteur, et un seul numéro à appeler.",
    },
    {
      question: "Pourquoi passer par un seul artisan plutôt que trois entreprises ?",
      answer:
        "Une salle de bains mobilise trois métiers : plomberie, électricité et chauffage. Confiés à trois entreprises, cela fait trois devis, trois plannings à accorder et un responsable difficile à identifier quand un problème apparaît entre deux lots. Je pratique les trois : un seul devis, un seul planning, un seul responsable du début à la fin. C'est exactement ce que veut dire clé en main.",
    },
    {
      question: "Comment se déroule un projet, du premier appel à la réception ?",
      answer:
        "On échange par téléphone, puis je viens sur place relever les cotes, regarder les réseaux existants et comprendre vos usages. Je vous remets ensuite un devis détaillé, gratuit : il liste les postes, les fournitures et la main-d'œuvre, et ne vous engage à rien. Le chantier ne démarre qu'après votre accord. À la fin, on fait ensemble le tour de la pièce pour vérifier que tout fonctionne.",
    },
    {
      question: "Faites-vous les douches à l'italienne et les salles de bains PMR ?",
      answer:
        "Oui. Douche à l'italienne de plain-pied ou avec caniveau, baignoire, WC suspendu, meuble vasque, et aménagements d'accessibilité : barres d'appui, siège de douche, WC surélevé, revêtement de sol antidérapant. Pour une salle de bains PMR, on regarde ensemble les contraintes de la pièce et les besoins réels de la personne avant de choisir le matériel.",
    },
  ],

  "entretien-chaudiere-gaz": [
    {
      question: "Combien coûte l'entretien annuel d'une chaudière gaz ?",
      answer:
        "Deux forfaits selon l'équipement : 85 € HT pour une chaudière gaz standard, 98 € HT pour une chaudière à condensation. Les prix sont hors pièces de rechange. L'écart entre les deux tient au nettoyage du siphon de condensats et au contrôle de l'évacuation, qui ne concernent que la condensation.",
    },
    {
      question: "Que comprend exactement le forfait d'entretien ?",
      answer:
        "Nettoyage complet du corps de chauffe et du brûleur, vérification du vase d'expansion (gonflage si nécessaire), de la soupape de sécurité et de l'étanchéité gaz, contrôle de la pompe (circulateur) et réglage de la combustion, avec mesure du taux de monoxyde de carbone (CO) ambiant et dans les fumées. Sur une chaudière à condensation s'ajoutent le nettoyage du siphon de condensats et la vérification de l'écoulement.",
    },
    {
      question: "Faut-il signer un contrat d'entretien ?",
      answer:
        "Non. Je ne propose pas de contrat : l'entretien est programmé, sans engagement. Si vous le souhaitez, je vous contacte chaque année pour planifier le passage, et vous restez libre d'accepter ou non. Vous gardez la main sur votre budget comme sur le choix de l'artisan.",
    },
    {
      question: "L'entretien annuel d'une chaudière gaz est-il obligatoire ?",
      answer:
        "Oui : le décret n° 2009-649 impose un entretien annuel par un professionnel qualifié. Au-delà de l'obligation, c'est surtout ce qui évite la panne en plein hiver : un brûleur et un échangeur propres, c'est un rendement maintenu et une chaudière qui dure plus longtemps.",
    },
  ],

  "entretien-chaudiere-fioul": [
    {
      question: "Combien coûte l'entretien d'une chaudière fioul ?",
      answer:
        "Le forfait est de 125 € HT, identique pour une chaudière fioul standard et pour une chaudière à condensation. Il est hors pièces de rechange : si une pièce doit être remplacée, vous êtes prévenu avant.",
    },
    {
      question: "Le ramonage est-il compris dans le forfait ?",
      answer:
        "Le forfait comprend le ramonage du corps de chauffe et du conduit de raccordement, le nettoyage de l'accroche-flamme et des électrodes, le nettoyage du filtre de la pompe et du préfiltre fioul, le réglage de la pression de pompe et le test de combustion : opacité des fumées, CO2, température. La vérification de la ligne de giclage et du flexible fait aussi partie du passage.",
    },
    {
      question: "Pourquoi régler le brûleur chaque année ?",
      answer:
        "Un brûleur fioul mal réglé, ce sont trois conséquences en même temps : une consommation plus élevée, des suies qui encrassent l'échangeur et un risque d'arrêt en pleine chauffe. Le réglage de l'air et du gicleur, associé au test de combustion, remet l'appareil dans ses paramètres de fonctionnement.",
    },
    {
      question: "Que se passe-t-il si je saute une année d'entretien ?",
      answer:
        "Rien d'immédiat, mais l'encrassement s'accumule : le rendement baisse, la consommation monte et le risque de panne augmente, souvent au pire moment, en janvier. Et pour une chaudière fioul, l'entretien annuel est une obligation légale (décret n° 2009-649) : sauter une année vous met en infraction.",
    },
  ],

  "entretien-pac": [
    {
      question: "Combien coûte l'entretien d'une pompe à chaleur ?",
      answer:
        "131,25 € HT pour une PAC air/eau, 150 € HT pour une PAC eau/eau (géothermie). Ce sont des forfaits, hors pièces de rechange. L'entretien d'une PAC eau/eau est plus complet : contrôle du glycol et du pH du réseau extérieur, nettoyage du pot à boue, vérification des deltas de température du captage et du chauffage.",
    },
    {
      question: "L'entretien d'une PAC est-il obligatoire ?",
      answer:
        "Une pompe à chaleur n'est pas soumise à l'obligation d'entretien annuel des chaudières fossiles. Elle a pourtant tout à y gagner : un filtre encrassé, un fluide frigorigène sous-chargé ou un échangeur sale peuvent faire chuter le COP de 20 à 30 %, donc consommer plus d'électricité pour la même chaleur. Sur une PAC eau/eau, l'attestation de contrôle annuel est remise à l'issue de la visite.",
    },
    {
      question: "Quand faire entretenir sa pompe à chaleur ?",
      answer:
        "Le bon moment se situe avant la saison de chauffe : fin d'été ou début d'automne. Un appareil vérifié avant les premiers froids évite de découvrir une panne au moment où vous en avez le plus besoin, et les réglages saisonniers sont faits pour l'hiver qui arrive.",
    },
    {
      question: "Quelles opérations sont réalisées sur une PAC air/eau ?",
      answer:
        "Nettoyage de l'évaporateur et vérification du ventilateur, contrôle d'étanchéité des liaisons et de la charge de gaz, contrôle de la pression et du vase d'expansion, nettoyage du filtre à tamis et du pot à boue, resserrage des connexions, vérification de l'appoint électrique et optimisation de la loi d'eau pour réduire la consommation.",
    },
  ],

  "entretien-climatisation": [
    {
      question: "Combien coûte l'entretien d'une climatisation ?",
      answer:
        "Trois forfaits : 105 € HT pour un mono-split (une unité extérieure, une unité intérieure), 140 € HT pour un bi-split (une extérieure, deux intérieures), et 35 € HT par unité intérieure supplémentaire. Prix hors pièces de rechange.",
    },
    {
      question: "Pourquoi l'entretien d'une clim est-il aussi une question de santé ?",
      answer:
        "Une unité intérieure accumule humidité et poussière : c'est le terrain idéal pour les moisissures, les bactéries et les allergènes, que l'appareil souffle ensuite dans la pièce. Le nettoyage et la désinfection virucide/fongicide des filtres et du vaporisateur, avec le nettoyage du bac à condensats et le test d'évacuation, traitent ce risque à la source.",
    },
    {
      question: "Que se passe-t-il quand le filtre est colmaté ?",
      answer:
        "Le débit d'air chute, l'échangeur travaille moins bien et le compresseur force pour atteindre la consigne : la consommation électrique monte, et le risque de panne avec elle. Un appareil propre restitue ses performances pour la même énergie.",
    },
    {
      question: "Peut-on entretenir plusieurs unités en une seule visite ?",
      answer:
        "Oui : le forfait de base couvre le premier split, puis chaque unité intérieure supplémentaire est facturée 35 € HT. Une maison équipée de trois ou quatre unités se traite donc en un seul passage, sur un forfait ajusté au nombre d'unités.",
    },
  ],

  plomberie: [
    {
      question: "Combien coûte une intervention de plomberie ?",
      answer:
        "En dépannage, l'intervention est facturée 50 € HT de l'heure, hors pièces et fournitures. Pour un projet — rénovation de salle de bains, remplacement de chauffe-eau, reprise de réseaux — le prix se chiffre sur devis gratuit, après visite. Un dépannage et un chantier ne se facturent pas de la même façon : le premier à l'heure, le second au poste.",
    },
    {
      question: "Recherchez-vous les fuites sans casser ?",
      answer:
        "Oui, la recherche de fuite est non destructive autant que possible : on localise d'abord l'origine — compteur, réseau encastré, appareil — avant de décider d'ouvrir. Cela évite de casser un carrelage ou une cloison sans savoir où se trouve le problème.",
    },
    {
      question: "Pouvez-vous remplacer un chauffe-eau ou poser un adoucisseur ?",
      answer:
        "Oui : remplacement d'un chauffe-eau électrique ou d'un ballon, pose d'un adoucisseur, raccordements d'eau et évacuations. Le devis précise le volume ou la puissance nécessaire selon le nombre de points d'eau et le nombre de personnes au foyer.",
    },
    {
      question: "Qui fait l'électricité si mes travaux de plomberie en ont besoin ?",
      answer:
        "Moi. Je suis plombier, chauffagiste et électricien : le raccordement d'un chauffe-eau, l'alimentation d'un sèche-serviettes ou la mise à la terre d'une salle d'eau ne demandent pas de faire venir une deuxième entreprise. Un seul interlocuteur, un seul passage, un seul devis.",
    },
    {
      question: "Intervenez-vous rapidement pour une fuite ?",
      answer:
        "Oui, sous 24 heures hors week-end et jours fériés, dans un rayon de 40 km autour de Saint-James. En cas de fuite active, coupez l'arrivée d'eau au robinet d'arrêt et appelez le 06 74 98 15 99.",
    },
  ],

  chauffage: [
    {
      question: "Combien coûte un dépannage de chauffage ?",
      answer:
        "L'intervention est facturée 50 € HT de l'heure, hors pièces. Elle couvre le diagnostic et la réparation sur place. Si la pièce nécessaire n'est pas disponible, on décide ensemble de la suite : commande, rendez-vous suivant, ou solution d'attente pour ne pas rester sans chauffage.",
    },
    {
      question: "Comment est fixé le prix d'un remplacement de chaudière ?",
      answer:
        "Il n'y a pas de fourchette standard : le prix dépend de l'énergie (gaz, fioul, bois ou pompe à chaleur), de la puissance nécessaire, du type d'évacuation des fumées, de l'état du circuit de chauffage et du matériel retenu. Le devis, gratuit, est établi après la visite : il détaille l'appareil, les raccordements et la mise en service.",
    },
    {
      question: "Combien coûte l'entretien annuel ?",
      answer:
        "Le tarif dépend de l'équipement et il est forfaitaire pour les chaudières comme pour les pompes à chaleur : les montants sont détaillés sur les pages Entretien chaudière gaz, Entretien chaudière fioul, Entretien PAC et Entretien climatisation. Aucun contrat n'est imposé : l'entretien est programmé, sans engagement.",
    },
    {
      question: "Chaudière, fioul ou pompe à chaleur : comment choisir ?",
      answer:
        "Trois critères pèsent plus que les autres : l'énergie disponible chez vous (réseau gaz ou cuve), l'émetteur déjà en place (radiateurs ou plancher chauffant) et l'isolation du logement. Une PAC air/eau sur radiateurs existants n'a pas le même rendement qu'un plancher chauffant, et passer du fioul à une PAC change le budget comme les aides mobilisables. C'est tout l'objet de la visite.",
    },
    {
      question: "Gérez-vous aussi l'électricité liée au chauffage ?",
      answer:
        "Oui : raccordement électrique de la chaudière ou de la PAC, alimentation du circulateur, protection au tableau, thermostat. Comme je suis aussi électricien, ces points ne sont pas renvoyés à une autre entreprise — c'est précisément l'intérêt d'un seul interlocuteur sur un chantier de chauffage.",
    },
  ],

  electricite: [
    {
      question: "Combien coûte une intervention électrique ?",
      answer:
        "En dépannage, 50 € HT de l'heure, hors fournitures. Pour une mise aux normes ou une rénovation complète, le prix se chiffre au devis, gratuit : il dépend du nombre de circuits, de l'état du tableau et de l'accessibilité des gaines. Remplacer un tableau et reprendre une simple prise n'ont évidemment rien à voir.",
    },
    {
      question: "Que couvre une mise en conformité NF C 15-100 ?",
      answer:
        "La vérification et la reprise de ce qui protège réellement l'installation : tableau et disjoncteurs différentiels, section des conducteurs, mise à la terre, liaisons équipotentielles, protection des circuits spécialisés. Le diagnostic initial dit ce qui est conforme et ce qui ne l'est pas ; le devis ne chiffre que ce qui doit être repris.",
    },
    {
      question: "Sous quel délai intervenez-vous pour un dépannage électrique ?",
      answer:
        "Sous 24 heures, hors week-end et jours fériés, dans un rayon de 40 km autour de Saint-James. Panne totale, disjoncteur qui ne tient pas, odeur de brûlé : coupez l'alimentation au tableau et appelez le 06 74 98 15 99 sans attendre.",
    },
    {
      question: "Travaillez-vous avec les autres corps de métier ?",
      answer:
        "Je suis plombier, chauffagiste et électricien, donc une grande partie des interfaces se règle sans troisième entreprise : électricité d'une salle de bains, raccordement d'une chaudière ou d'une PAC, alimentation d'un chauffe-eau. Pour les lots que je ne réalise pas, je le dis clairement dès le devis plutôt que de les laisser dans le flou.",
    },
  ],

  climatisation: [
    {
      question: "Combien coûte l'installation d'une climatisation réversible ?",
      answer:
        "Le prix dépend du nombre d'unités intérieures, de la surface à traiter, de la configuration du logement (longueur de liaison, accès à l'unité extérieure, mur porteur ou non) et du matériel choisi. Il n'existe pas de tarif au split valable partout : le devis, gratuit, se fait après visite, avec le nombre d'unités et la puissance calculés pour vos pièces.",
    },
    {
      question: "Une climatisation réversible peut-elle chauffer la maison ?",
      answer:
        "Oui, c'est une PAC air/air : l'été elle rafraîchit, l'hiver elle chauffe en inversant le cycle. Elle est très efficace en intersaison et en appoint, mais elle ne remplace pas un circuit d'eau — radiateurs ou plancher chauffant — pour chauffer une maison entière. Ce point se tranche à la visite, selon les pièces à équiper.",
    },
    {
      question: "Quel entretien pour une climatisation, et à quel tarif ?",
      answer:
        "Nettoyage des filtres, du bac à condensats et des échangeurs, contrôle des pressions et du fluide frigorigène, vérification des liaisons électriques. Les forfaits d'entretien — mono-split, bi-split, unité supplémentaire — sont détaillés sur la page Entretien climatisation.",
    },
    {
      question: "Faut-il un entretien tous les ans ?",
      answer:
        "C'est recommandé, même s'il n'existe pas d'obligation annuelle pour une climatisation domestique comme pour les chaudières. Un appareil entretenu garde son rendement, consomme moins, tombe moins en panne et souffle un air plus sain.",
    },
    {
      question: "Intervenez-vous pour l'installation comme pour le dépannage ?",
      answer:
        "Les trois : étude et installation, entretien annuel, dépannage. Comme je suis plombier, chauffagiste et électricien, l'alimentation électrique de la clim, l'évacuation des condensats et les raccordements sont traités dans le même chantier, sans faire appel à une autre entreprise.",
    },
  ],

  aerothermie: [
    {
      question: "Combien coûte une pompe à chaleur air/eau ?",
      answer:
        "Le prix dépend de la puissance de la machine (donc de la surface, de l'isolation et des besoins réels), du nombre de circuits à alimenter (radiateurs, plancher chauffant), de la présence d'un ballon tampon et de la production d'eau chaude sanitaire, et enfin du matériel retenu. Deux maisons de même surface peuvent avoir des budgets très différents : la visite et le devis, gratuits, donnent le chiffre juste.",
    },
    {
      question: "Peut-on remplacer une chaudière fioul par une PAC air/eau ?",
      answer:
        "Oui, c'est le remplacement le plus courant dans le secteur. On conserve généralement les radiateurs existants en ajustant la température de départ, on ajoute un ballon tampon si le volume d'eau est insuffisant, et on adapte l'évacuation. La visite permet de vérifier si vos radiateurs sont dimensionnés pour fonctionner à basse température.",
    },
    {
      question: "L'aérothermie fonctionne-t-elle vraiment en hiver ?",
      answer:
        "Oui : les modèles air/eau récents chauffent encore efficacement jusqu'à -15 °C, parfois -20 °C selon le modèle, avec une résistance d'appoint qui prend le relais en dessous. Dans le Sud-Manche et en Ille-et-Vilaine, le climat océanique doux laisse rarement la PAC dans cette zone : elle couvre l'essentiel des besoins de l'année.",
    },
    {
      question: "Qui installe et qui raccorde la PAC ?",
      answer:
        "Moi, du début à la fin : pose de l'unité extérieure, circuit hydraulique, raccordement aux émetteurs, alimentation électrique et protection au tableau, mise en service et réglages. C'est l'avantage d'un artisan plombier-chauffagiste-électricien : pas de coordination à organiser entre trois entreprises.",
    },
  ],

  geothermie: [
    {
      question: "Quel budget pour une pompe à chaleur géothermique ?",
      answer:
        "Le budget dépend surtout du captage : capteurs horizontaux enterrés, qui demandent de la surface de terrain, ou forages verticaux, plus coûteux mais possibles sur un petit terrain. S'y ajoutent la puissance de la machine, l'état du circuit de chauffage et le matériel. Aucune fourchette sérieuse ne peut être donnée sans connaître le terrain : la visite et le devis, gratuits, tranchent entre les deux solutions.",
    },
    {
      question: "Captage horizontal ou forage vertical : comment choisir ?",
      answer:
        "Le critère principal est la surface disponible. Un captage horizontal demande un terrain dégagé, sans arbres ni constructions, sur une surface proportionnelle aux besoins de la maison. Le forage vertical s'impose quand le terrain est petit ou encombré, mais il coûte plus cher à réaliser. La nature du sol compte aussi : elle détermine le rendement du captage.",
    },
    {
      question: "La géothermie est-elle intéressante sous notre climat ?",
      answer:
        "Le sol garde une température stable toute l'année, ce qui donne à la géothermie un rendement régulier, y compris au cœur de l'hiver, là où une PAC air/eau voit son COP baisser. C'est ce qui la rend pertinente ici : moins de variations saisonnières, donc une consommation plus prévisible. Le calcul se fait sur votre maison, avec son isolation et ses émetteurs.",
    },
    {
      question: "Faut-il un entretien particulier pour une géothermie ?",
      answer:
        "Oui, un contrôle annuel : pression et taux de glycol du réseau extérieur, pH, nettoyage du pot à boue, vérification du vase d'expansion, des paramètres du compresseur, des sécurités et des deltas de température du captage et du chauffage. L'attestation de contrôle est remise à l'issue de la visite ; le forfait correspondant est détaillé sur la page Entretien PAC.",
    },
  ],
}
