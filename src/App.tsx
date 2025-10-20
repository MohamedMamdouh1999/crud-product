import { useState } from "react";
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { formInputs, products } from "./data"
import Button from "./components/ui/Button";

const App = () => {
  let [isOpen, setIsOpen] = useState(false);
  function open(): void {
    setIsOpen(true)
  }
  function close(): void {
    setIsOpen(false)
  }

  const productsList = products.map(product => <ProductCard key={product.id} product={product}/>);
  const inputs = formInputs.map(input => (
    <div key={input.id} className="flex flex-col space-y-2">
      <label htmlFor={input.id}>{input.label}</label>
      <input type={input.type} id={input.id} name={input.name} className="border p-2 rounded-md focus:outline-none focus:ring-0" />
    </div>
  ));

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
        {productsList}
        <Button className="bg-red-700" onClick={open}>Save</Button>
      </div>
      <Modal isOpen={isOpen} close={close} title="Add a new product">
        <form className="flex flex-col space-y-4">
          {inputs}
          <div className="flex items-center justify-between space-x-2">
            <Button className="bg-indigo-700" onClick={close}>Submit</Button>
            <Button className="bg-black" onClick={close}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App