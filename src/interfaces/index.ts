export interface IProduct {
    id: number;
    title: string;
    description: string;
    imageURL: string;
    price: number;
    colors: ("#A31ACB" | "#3C2A21" | "#1F8A70" | "#820000" | "#FF0032")[];
    category: {
        name: 'cars' | 'computers' | 'phones' | 'tv' | 'laptops' | 'tablets' | 'accessories';
        imageURL: string;
    }
}