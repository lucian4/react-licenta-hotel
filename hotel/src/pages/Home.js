import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Apartamente de lux"
          subtitle="incepand de la 99 RON pe noapte"
        >
          <Link to="/rooms" className="btn-primary">
            Vizualizati apartamentele noastre
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
