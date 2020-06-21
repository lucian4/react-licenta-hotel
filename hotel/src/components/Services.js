import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktailuri gratuite",
        info:
          "Barul de la piscina este deschis intre orele 10:00-02:00 si serveste bauturi gratis pentru clientii hotelului.",
      },
      {
        icon: <FaHiking />,
        title: "Excursii in Delta",
        info:
          "Se pot organiza excursii cu grupul in delta dunarii cu transportul asigurat de hotel",
      },
      {
        icon: <FaShuttleVan />,
        title: "legatura directa aeroport",
        info:
          "Transport de la si catre hotel cu masina si sofer asigurat de noi.",
      },
      {
        icon: <FaBeer />,
        title: "Bere artizanala locala",
        info:
          "20 de sortimente de bere de la producatorii locali oferite catre clientii nostri.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
