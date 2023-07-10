export interface Card {
    name: string,                   
    collector_number: number,     
    types: string,                  
    classes: string,                
    element: string,
    effect: string,
    flavor_text: string,
    cost_memory: number,
    cost_reserve: number,
    level: number,
    power: number,
    life: number,
    speed: string,
    legality: string,
    editions: Record<string, string | number>[],
}

export interface SetGA {
    name: string,
    prefix: string,
}

export interface Edition {
    slug: string,
    illustrator: string,
    set: SetGA,
}

