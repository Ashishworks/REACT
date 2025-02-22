function FormSub(event){
    event.preventDefault();  // form in react by default removed the console.log part in console after submission to prevent this from happening we use preventDefault
    console.log("form was submitted");
}

function Form(){
    return(
        <div>
            <form onSubmit={FormSub/*can also use onclick on button*/}> 
                <input></input>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;

