import "./product.css"
import Price from "./price.jsx"
import Des from "./descrip.jsx"
function ActProduct({title,idx}){
    let oldPrice=[2000,3000,4000];
    let newPrice=[1500,2500,3500];
    let descrip=[["wonderful mouse you have ever seen","wonderful mouse you have ever seen2"],[
    "wonderful mousepad you have ever seen","wonderful mousepad you have ever seen2"],["wonderful joystick you have ever seen","wonderful joystick you have ever seen2"]];
    return(
        <div class="top top0">
            <p style={{fontWeight:"bold"}}>{title}</p>
            <Des des={descrip[idx][0]}/>
            <Des des={descrip[idx][1]}/>
            <Price price1={oldPrice[idx]} price2={newPrice[idx]}/>
            
        </div>
    )
}
export default ActProduct;