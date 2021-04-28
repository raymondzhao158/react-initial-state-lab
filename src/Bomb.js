import { render } from "enzyme"
import React, { Component } from "react"
export default class bomb extends Component{
    constructor(props){
        super()
        this.state = {secondsLeft:props.initialCount}

    }
//     render(){
//     if(this.state.SecondsLeft === 0 ){
//         return(<div>
//             {this.state.secondsLeft} seconds left before I go boom!
//         </div>
//         )}
//         else{
//             return(
//                 <div>Boom!</div>
//             )
//         }

    
// }
render() {
    return this.state.secondsLeft === 0 ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!`
 }
}


