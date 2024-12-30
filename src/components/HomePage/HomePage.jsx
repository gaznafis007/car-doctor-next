import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Services from "./Services/Services";

const HomePage = () => {
  return (
    <section>
      <Header />
      <About/>
      <Services/>
    </section>
  );
};

export default HomePage;
