import './App.css';
import Profile from './Profile/Profile';
import {Button } from "react-bootstrap";
import React, { Component } from 'react';

export default class App extends Component {
  state={
    Person:{
      fullName:"Wael SAID",
      Profession:"Web Developper",
      Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imgSrc:"/pic.jpg",
    },
    show: false,
    count: 0,
  }

  componentDidMount(){
    this.myInterval = setInterval(()=>{
      this.setState(prevState=>({
        count: prevState.count + 1
      }))
    }, 1000)
  }
  showProfile = () =>{
    this.setState({show: true})
  };
  render() {
    const {count} = this.state
    if (this.state.show){
    return (
      <div className="App">
              <div className="Counter">
        <h1> Time since This Component Have been Mounted <br/> {count} Seconds</h1>
        </div> 
         <Profile fullName={this.state.Person.fullName} Profession={this.state.Person.Profession} Bio={this.state.Person.Bio} imgSrc={this.state.Person.imgSrc}></Profile>
      
      </div>   
           )
                          } else {
    return (<Button variant="success" className="bouton" onClick={this.showProfile}>Show Profile</Button>)
          }
  }
}
