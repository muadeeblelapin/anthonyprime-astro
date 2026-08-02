import { CITIES, type City } from "./cities"
import { SERVICES, type Service } from "./services"

export interface ServiceCity {
  service: Service
  city: City
  slug: string
  title: string
  description: string
  h1: string
}

// Services à forte valeur ajoutée à décliner par ville
const HIGH_VALUE_SLUGS = [
  "climatisation",
  "chauffage",
  "pompe-a-chaleur",
  "aerothermie",
  "geothermie",
  "renovation-salle-de-bains",
  "entretien-chaudiere-gaz",
  "entretien-chaudiere-fioul",
  "entretien-pac",
  "entretien-climatisation",
]

export function getServiceCityCombinations(): ServiceCity[] {
  const combos: ServiceCity[] = []
  for (const slug of HIGH_VALUE_SLUGS) {
    const service = SERVICES[slug]
    if (!service) continue
    for (const city of CITIES) {
      const name = service.name
      const cityName = city.name
      combos.push({
        service,
        city,
        slug: `${slug}/${city.slug}`,
        title: `${name} à ${cityName} (${city.code}) — Anthony PRIME`,
        description: `${name} à ${cityName} (${city.code}) par Anthony PRIME, artisan RGE basé à Saint-James (50240). Devis gratuit et intervention rapide dans le Sud-Manche et l'Ille-et-Vilaine.`,
        h1: `${name} à ${cityName} et ses environs`,
      })
    }
  }
  return combos
}
