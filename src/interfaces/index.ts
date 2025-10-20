export interface IProduct {
    id: number;
    title: string;
    description: string;
    imageURL: string;
    price: number;
    colors: ("#A31ACB" | "#3C2A21" | "#1F8A70" | "#820000" | "#FF0032")[];
    category: ICategory;
}

export interface ICategory {
    name: 'cars' | 'computers' | 'phones' | 'tv' | 'laptops' | 'tablets' | 'accessories';
    imageURL: string;
}

export interface IFormInput {
    label: string;
    id: string;
    name: string;
    type: string;
}