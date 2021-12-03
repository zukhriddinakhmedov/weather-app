import { Component, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./styles/Home.css";
import uniqid from "uniqid";
import Weather from "./Weather";

class Home extends Component {
  state = {
    cities: [],
    cityName: "",
  };

  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    // console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      //   this.setState({ cities: data });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="searchbar">
              <Form onSubmit={this.handleSubmit}>
                <Form.Control
                  type="text"
                  className="searchInput d-inline"
                  value={this.state.cityName}
                  onChange={this.handleChange}
                />
              </Form>
              <Container>
                <Row>
                  <Col>
                    {this.state.cities.map((cityForecast) => (
                      <Weather key={uniqid()} data={cityForecast} />
                    ))}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
