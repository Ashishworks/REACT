import { useState } from "react"
function Like(){
    let [isLiked,setIsLiked]=useState(false);    // line 1 
    let toggleLike=()=>{
        console.log("toggled");
        setIsLiked(!isLiked);   // this re render whole function except line 1 cuz its initialization
    };
    let likeStyle={color: "red"}
    return(
        <div>
            <p onClick={toggleLike} >
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ) : (
                    <i className="fa-regular fa-heart" style={likeStyle}></i>
                    )}
            </p>
        </div>
    )
}

export default Like