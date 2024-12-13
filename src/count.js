import React from 'react';
import "./counter.css";
 class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    Increment(){
        return(
            this.setState({
                count:this.state.count+1
            })
        );
    }
    Decrement(){
        return(
            this.setState({
                count:this.state.count-1
            })
        );
    }
    render(){
        return(
            <>
            <div className='container'>
                <center>
                    <h1>Interactive Counter</h1><br/>
                    <h2>Count:{this.state.count}</h2>
                    <br/>
                    <br/>
                    <div id='btn'>
                    <button  onClick={this.Increment.bind(this)}>Increment</button>
                    <button onClick={this.Decrement.bind(this)}>Decrement</button>

                    </div>
                </center>

            </div>
            </>
        );
    }
 }
 export default Counter;
