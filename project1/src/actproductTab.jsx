import ActProduct from "./actproduct.jsx";
import "./product.css"
function ActProductTab() {
    let style={display:"flex", flexWrap:"wrap", justifyContent:"centre", alignItems:"centre"}
    return (
        <div style={style}>
            <ActProduct title="Logi" des="wonderful mouse you have ever seen" idx="0"/>
            <ActProduct title="Zebro" des="wonderful mousepad you have ever seen" idx="1"/>
            <ActProduct title="Redgear" des="wonderful joystick you have ever seen" idx="2"/>
        </div>
    )
}

export default ActProductTab;