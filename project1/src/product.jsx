import "./product.css"
function Product({ title, price, features, obj }) {  //default price =1 also {title,price=1} is a object which os passed in the component
    <h3>{features.map((feature) => <li>{feature}</li>)}</h3>
    // let style1 = { backgroundColor: "yellow" };
    let style2={backgroundColor: price==10 ? "blue" :"" };  // in jsx we use camel case instead of writing background-color
    return (
        <div class="top" style={style2} >
            <h3 class="top1">{title}</h3>
            <h3 class="top1">{price}</h3>
            <h3 class="top1">{features}</h3>
            <h3 class="top1">{obj.key1} {obj.key2} {obj.key3}</h3>
            {price > 10 ? "DISCOUNT" : null}
            {price < 10 && <p> SMALL DISCOUNT</p>}
        </div>
    )
}
export default Product;