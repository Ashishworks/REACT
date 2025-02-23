import { useState } from "react";
export default function LudoBoard(){
    let style={color:"black"};
    let [moves,setMove]=useState({red: 0,blue: 0,green: 0,yellow: 0});
    let [arr,setArr]=useState(["no moves"]);
    let updateRed=()=>{
        setMove((prevMove)=>{    //React automatically passes the current/latest state value (moves) to prevMoves.
            return{...prevMove,red: prevMove.red+1}
        })
        setArr((prevArr)=>{
            return[
                ...prevArr," red moves"
            ]
        });
    }

    let updateBlue=()=>{
        setMove((prevMove)=>{
            return{
                ...prevMove,blue: prevMove.blue+1  // returns an object  and also when it says blue: prevMove.blue+1 it actually over write the blue value
            }
        })
        setArr((prevArr)=>{
            return[
                ...prevArr," blue moves"   // returns an array with two values ...prevarr ( having all the prev array elements and also adding "blue moves")
            ]
        });
        console.log(arr);
    }

    let updateGreen=()=>{
        setMove((prevMove)=>{
            return{...prevMove,green: prevMove.green+1}
        })
        setArr((prevArr)=>{
            return[
                ...prevArr," green moves"
            ]
        });
    }

    let updateYellow=()=>{
        setMove((prevMove)=>{
            return{...prevMove,yellow: prevMove.yellow+1}
        })
        setArr((prevArr)=>{
            return[
                ...prevArr," yellow moves"
            ]
        });
    }
    return(
        <div style={style}>
            <h3>GAME BEGINS</h3>
            <h4>{arr}</h4>
            <p>RED moves={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            <p>BLUE moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>GREEN moves={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            <p>YELLOW moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
        </div>
    )
}