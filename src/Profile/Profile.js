import {Button, Card } from "react-bootstrap";
import propTypes from "prop-types";

import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
    <div style={{position:'center', marginTop:50}}>
         <Card style={{ width: '13rem', border:"solid",borderColor:"darkBlue", borderRadius:10, position:"center", backgroundColor:'#3BB0BA', padding:10}}>
            <Card.Img style={{borderRadius:500}} variant="top" src={this.props.imgSrc} />
             <Card.Body>
                 <Card.Title style={{fontWeight:500, color:'white',fontSize:"2rem"}}>{this.props.fullName}</Card.Title>
                 <Card.Text style={{fontWeight:500, color:'white',fontSize:"1.1rem"}}> {this.props.Profession} </Card.Text >
                <p style={{color:'white',fontSize:"1rem"}}>{this.props.Bio}</p>
                <Button variant="primary" >Click Me</Button>
             </Card.Body>
         </Card>
        </div>

        )
    }
}



Profile.defaultProps={
    FullName:"Wael",
    Profession:"WebDev",
    Bio: "No data Available"
}
Profile.propTypes={
    FullName: propTypes.string,
    Profession: propTypes.string,
    Bio: propTypes.string,
}
