import React, { Component } from "react";
class result extends Component{
    render(){
        return(
            <div>
                <h2>Result</h2>
                <div className="description">
                    <p id="feedback">You need more practice!</p>
                    <h3>Your score is 20%</h3>
                    <div className="insight">
                        <p>Total number of questions</p> <span>15</span>
                        <p>Number of attempted questions</p> <span>9</span>
                        <p>Number of correct answers</p> <span>3</span>
                        <p>Number of wrong answers</p> <span>6</span>
                    </div>
                </div>
                <div className="buttons2">
                    <button>Play Again</button>
                    <button>back to home</button>
                </div>
            </div>
        )
    }
}
export default result