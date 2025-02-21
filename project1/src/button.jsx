function Print(eve){
    console.log("damn it its working");
    console.log(eve)
}

function Print2(){
    console.log("damn again");
}

function Print3(){
    console.log("you hover the para");
}

function Print4(){
    console.log("you double click");
}

function Button() {
    return (
        <>
            <button onClick={Print}>CLICK HERE</button>
            <p onClick={Print2}>yeah click here</p>
            <p onMouseOver={Print3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti, rem repudiandae culpa eveniet soluta beatae totam ratione molestias reprehenderit ipsum dolorum, delectus maxime, saepe doloribus voluptatum alias architecto non?</p>
            <button onDoubleClick={Print4}> yo yo yo </button>
        </>
    )
}

export default Button;