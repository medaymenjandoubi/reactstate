import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export class Counter extends Component {
constructor(){
    super();
    this.state={
        counter : 0,
        time : 0,
        interval : null
    }
}
incr=()=>{
    this.setState({counter : this.state.counter+1})
}    
decr=()=>{
    if (this.state.counter > 0){
        this.setState({counter : this.state.counter-1})
    }
} 
reset=()=>{
    this.setState({counter : 0})
} 
componentDidMount(){
this.setState({interval : setInterval(
    ()=>(this.setState({time : this.state.time+1})),1000
)})
}

  render() {
    return (
      <div>
        <button onClick={this.incr}>+</button>
        <button onClick={this.decr}>-</button>
        <button onClick={this.reset}>reset</button>
        <h1>{this.state.counter}</h1>
        <h1>{this.state.time}</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"/photo.jpg"} />
            <Card.Body>
            <Card.Text>
            First Name : Mohamed Aymen
            </Card.Text>
            <Card.Text>
            Last Name : Jandoubi
            </Card.Text>
            <Card.Text>
            Age : 22
            </Card.Text>
            </Card.Body>
        </Card>
      </div>    )
  }
}
export default Counter
