import type { IFormInput, IProduct } from "../interfaces";

export const products: IProduct[] = [
    {
        id: 1,
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint!",
        imageURL: "https://dummyimage.com/200x200/000/fff",
        price: 100,
        colors: ["#820000", "#A31ACB"],
        category: {
            name: "cars",
            imageURL: "https://dummyimage.com/200x200/000/fff"
        }
    },
    {
        id: 2,
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint!",
        imageURL: "https://dummyimage.com/200x200/000/fff",
        price: 100,
        colors: ["#1F8A70", "#3C2A21"],
        category: {
            name: "computers",
            imageURL: "https://dummyimage.com/200x200/000/fff"
        }
    },
    {
        id: 3,
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint!",
        imageURL: "https://dummyimage.com/200x200/000/fff",
        price: 100,
        colors: ["#FF0032", "#1F8A70"],
        category: {
            name: "phones",
            imageURL: "https://dummyimage.com/200x200/000/fff"
        }
    },
    {
        id: 4,
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint!",
        imageURL: "https://dummyimage.com/200x200/000/fff",
        price: 100,
        colors: ["#3C2A21", "#820000"],
        category: {
            name: "tv",
            imageURL: "https://dummyimage.com/200x200/000/fff"
        }
    },
];

export const formInputs: IFormInput[] = [
    {
        label: 'Product Title',
        id: 'title',
        name: 'title',
        type: 'text'
    },
    {
        label: 'Product Description',
        id: 'description',
        name: 'description',
        type: 'text'
    },
    {
        label: 'Product Image URL',
        id: 'imageURL',
        name: 'imageURL',
        type: 'text'
    },
    {
        label: 'Product Price',
        id: 'price',
        name: 'price',
        type: 'number'
    },
    {
        label: 'Product Category',
        id: 'category',
        name: 'category',
        type: 'text'
    }
];