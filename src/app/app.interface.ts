interface AbilityDetail {
    name: string;
    url: string;
}

interface Ability {
    ability: AbilityDetail;
    is_hidden: boolean;
    slot: number;
}

interface Form {
    name: string;
    url: string;
}

interface Species {
    name: string;
    url: string;
}

interface SpriteSet {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        'official-artwork': {
            front_default: string
            front_shiny: string
        }
    }
}

interface StatDetail {
    name: string;
    url: string;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: StatDetail;
}

interface TypeDetail {
    name: string;
    url: string;
}

interface PokemonType {
    slot: number;
    type: TypeDetail;
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    height: number;
    held_items: any[]; // Ajusta según la estructura real de los items
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    past_abilities: any[]; // Ajusta según la estructura real de las habilidades pasadas
    past_types: any[]; // Ajusta según la estructura real de los tipos pasados
    species: Species;
    sprites: SpriteSet;
    stats: Stat[];
    types: PokemonType[];
    weight: number;
}