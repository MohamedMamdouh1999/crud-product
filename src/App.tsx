import ProductCard from "./components/ProductCard"
import { products } from "./data"

const App = () => {
  const productsList = products.map(product => <ProductCard key={product.id} product={product}/>)
  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
        {productsList}
      </div>
    </main>
  )
}

export default App