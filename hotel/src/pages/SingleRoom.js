import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Apartamentul cautat nu exista!</h3>
          <Link to="/rooms" className="btn-primary">
            Inapoi
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      breakfast,
      pets,
      images,
      extras,
    } = room;

    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              Inapoi la apartamente
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>descriere</h3>
              <p>{description}</p>
            </article>
            <articel className="info">
              <h3>informatii</h3>
              <h6>Pret: {price} RON</h6>
              <h6>Suprafata:{size} metri patrati</h6>
              <h6>
                Nr persoane:
                {capacity > 1 ? `${capacity} Persoane` : `${capacity} Persoana`}
              </h6>
              <h6>
                {pets
                  ? "Sunt permise animalele de companie"
                  : "Nu sunt perminse animale de companie"}
              </h6>
              <h6>{breakfast && "Mic dejun inclus"}</h6>
            </articel>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extra</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
