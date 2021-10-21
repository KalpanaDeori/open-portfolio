import { React, useState } from "react";
import "./debakrishna.css";
import { Navigation } from "./navigation";
import { Experience_sec } from "./experience_sec";
import { Project } from "./project";
import { Footer } from "./footer";
// IMAGE IMPORT
import debakrishna from "./img/deba.JPG";

export const Debakrishna = () => {
  return (
    <div>
      <header id="header">
        <Navigation></Navigation>
        <div className="header--content">
          <div className="header--text">
            <div className="my--image--area">
              <img className="my--image" src={debakrishna} alt="" />
            </div>
            <h1 className="my--name">debakrishna</h1>
            <p className="my--intor-text">
              photographer and rider
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
