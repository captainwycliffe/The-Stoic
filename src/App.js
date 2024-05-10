import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import seneca from "./images/seneca.jpeg";
import marcus from "./images/marcus.jpg";
import epictitus from "./images/epictitus.jpeg";
import ryan from "./images/ryan.jpeg";
import alan from "./images/alan.jpeg";
import benedict from "./images/benedict.jpeg";
import bob from "./images/bob.jpeg";
import budhaa from "./images/budhaa.jpeg";
import david from "./images/david.jpeg";
import krishna from "./images/krishna.jpeg";
import nasim from "./images/nasim.jpeg";
import naval from "./images/naval.jpeg";
import rinpoche from "./images/rinpoche.jpeg";
import stoicism from "./images/stoicism.jpeg";
import thibaut from "./images/thibaut.jpeg";
import voltaire from "./images/voltaire.jpeg";

const imageUrls = [
  seneca,
  marcus,
  epictitus,
  ryan,
  alan,
  benedict,
  bob,
  budhaa,
  david,
  krishna,
  nasim,
  naval,
  rinpoche,
  stoicism,
  thibaut,
  voltaire,
];
export default class Aph4 extends Component {
  state = { quote: "", author: "", backgroundImageIndex: 0 };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://stoic.tekloon.net/stoic-quote")
      .then((response) => {
        const { quote } = response.data;
        const { author } = response.data;

        this.setState({ quote, author });

        this.setState((prevState) => ({
          backgroundImageIndex:
            (prevState.backgroundImageIndex + 1) % imageUrls.length
        }))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { quote, author } = this.state;

    return (
      <div
        className="app"
        style={{
          backgroundImage: `url(${imageUrls[this.state.backgroundImageIndex]})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="quote-card">
          <h1 className="heading">{quote}</h1>
          <p className="author">
            <i>~ {author} ~</i>
          </p>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me advice</span>
          </button>
        </div>
      </div>
    );
  }
}
