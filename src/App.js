import React, { Component } from 'react'
import Counter from './Counter'
export class App extends Component {
  constructor(){
      super();
      this.state = {show : false}
  }
  toggle=()=>{
    this.setState({show : !this.state.show })
  }
  render() {

    return (
      <div>
        {this.state.show ? <button onClick={()=>{this.toggle()}}>hide</button> : (<button onClick={()=>{this.toggle()}}>show</button>)}
        {this.state.show ? <Counter/> : (<h1>click on show to see the counter</h1>)}
      </div>
    )

  }
}

export default App

