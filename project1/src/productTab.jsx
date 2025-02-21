import Product from "./product.jsx"
function ProductTab() {
    let options=["hello","Welcome","24/7"]
    let options2=[<li>"hello"</li>,<li>"Welcome"</li>,<li>"24/7"</li>]
    return <>
    <Product title="Notebook" price={100} features={options} obj={{key1:"sample1",key2:"sample2",key3:"sample3"}}/>
    <Product title="Pencil" price={10} features={options2} obj={{key1:"sample1",key2:"sample2",key3:"sample3"}}/>
    <Product title="Sharpner" price={5} features={["hello","Welcome","24/7"]} obj={{key1:"sample1",key2:"sample2",key3:"sample3"}}/>
    </>
  }
  export default ProductTab