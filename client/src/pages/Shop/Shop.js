import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Login from "../../components/Login/Login";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import video from "../../compressed.mp4";
import ReactPlayer from 'react-player';
import "./Shop.css";
import API from "../../utils/api";
import { Container, Row, Col } from "reactstrap";
import Cards from "../../components/Cards";
import Client, { Shopify } from 'shopify-buy';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import axios from "axios";

class Shop extends Component {
  // constructor() {
  //   super();
    state = {};

  componentDidMount() {
    this.getData();
    console.log('this step has been completed');
  }


  getData = () => {
    API.getData()
    .then(res => {
      console.log(res);
      this.setState({state: res.data})
    })
    .catch(err => console.log(err));
  };

  getTitle = () => {
    // return this.state.data.products;
  }

  render() {
    return (
      <Container className='container'>
        <Row>
          <Col className="logo" xs="1">
            <NavLink to='/home'>
              JEPbyJEP
          </NavLink>
          </Col>
        </Row>
        <Row>
          <Col className="navi" sm={{ size: 'auto', offset: 1 }}>
            <NavLink className="linkfont" to='/shop'>Shop</NavLink><br />
            <NavLink className="linkfont" to='/videos'>Videos</NavLink><br />
            <NavLink className="linkfont" to='/collaboration'>Collaboration</NavLink>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <div className="containerpages">
              <div className="cards">
              <h1>{this.getTitle()}</h1>
                // have to call cards here
                <CardDeck>
                  <Card>
                    <CardImg />
                    <CardBody>
                      <CardTitle>Summer 2018 </CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>$30 Brand new Shirt</CardText>
                      <Button>View Item</Button>
                    </CardBody>
                  </Card>
                </CardDeck>
              </div>
            </div>
          </Col>
        </Row>
        {console.log("props: ", this.props)}
        <Footer>
        </Footer>
      </Container>
    )
  }
}

export default Shop;
