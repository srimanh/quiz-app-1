import React, { Component } from "react";
class quiz extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="texts">
                        <h1>Question</h1>
                        <p>1 of 15</p>
                        <p id="question">Which is the only mammal that can jump?</p>
                    </div>
                    <div className="options">
                       <button>Dog</button>
                       <button id="ele">Elephant</button>
                    </div>

                    <div className="options">
                       <button>Goat</button>
                       <button>Lion</button>
                    </div>
                    <div className="buttons">
                        <button className="prev">Previous</button>
                        <button className="next">Next</button>
                        <button className="quit">Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default quiz