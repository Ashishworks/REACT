function Price({price1,price2}){
    let style1={
        textDecorationLine:"line-through"
    }
    let style2={
        fontWeight: "bold"
    }
    return(
        <div style={{backgroundColor: "gold", borderBottomLeftRadius:"30px", borderBottomRightRadius:"30px", height:"30px", paddingTop:"8px"}}>
            <span style={style1}>{price1}</span> &nbsp; &nbsp;
            <span style={style2 }>{price2}</span>
        </div>
    )
}

export default Price;