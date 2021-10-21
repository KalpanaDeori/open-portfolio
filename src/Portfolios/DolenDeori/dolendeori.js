import { React, useState } from "react";
import "./dolendeori.css";
import { Navigation } from "./navigation";
import { Experience_sec } from "./experience_sec";
import { Project } from "./project";
import { Footer } from "./footer";
// IMAGE IMPORT
import dolen_deori from "./img/dolendeori.jpg";

export const Dolendeori = () => {
  return (
    <div>
      <header id="header">
        <Navigation></Navigation>
        <div className="header--content">
          <div className="header--text">
            <div className="my--image--area">
              <img className="my--image" src={dolen_deori} alt="" />
            </div>
            <h1 className="my--name">DOLEN CH. DEORI</h1>
            <p className="my--intor-text">
              Software developer and machine learning engineer
            </p>
          </div>
        </div>
      </header>
      <Experience_sec></Experience_sec>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
};
