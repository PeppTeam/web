import React from "react";

export const Hero = ({ title, intro }) => {
  return (
    <section className="hero is-medium has-text-centered">
      <div className="hero-body">
        <div className="container ">
          <div className="columns ">
            <div className="column is-half is-offset-3">
              <h1 className="title">{title}</h1>
              <p className="subtitle ">{intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
