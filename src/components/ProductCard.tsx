import Image from "./ui/Image"
import Button from "./ui/Button"
import type { IProduct } from "../interfaces"
import { txtSlice } from "../utils/function"

interface IProps {
    product: IProduct
}

const ProductCard = ({product}: IProps) => {
    const {imageURL, title, description, price, category} = product;
    const colors = product.colors.map(color => <li style={{backgroundColor: color}} className="w-5 h-5 rounded-full cursor-pointe"></li>);
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 p-2 border rounded-md flex flex-col space-y-2">
            <Image imageURL={imageURL} alt={title} className="rounded-md w-full"/>
            <h3>{title}</h3>
            <p>{txtSlice(description)}</p>
            <ul className="flex items-center space-x-2">
                {colors}
            </ul>
            <div className="flex items-center justify-between">
                <span>${price}</span>
                <Image imageURL={category.imageURL} alt={category.name} className="rounded-full w-6 h-6 object-center object-cover"/>
            </div>
            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-700">EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>
            </div>
        </div>
    )
}

export default ProductCard