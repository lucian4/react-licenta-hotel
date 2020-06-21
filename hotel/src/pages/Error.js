import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="PAGINA NU A FOST GASITA">
        <Link to="/" className="btn-primary">
          Inapoi la pagina principala
        </Link>
      </Banner>
    </Hero>
  );
}
