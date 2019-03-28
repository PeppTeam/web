import React from "react";

export const Hero = ({ title, intro }) => {
  return (
    <section className="hero is-medium has-text-centered has-bg-image">
      <div className="hero-body">
        <div className="container has-text-white">
          <div className="columns ">
            <div className="column is-half is-offset-3">
              <h1 className="title has-text-white">{title}</h1>
              <p className="subtitle has-text-white">{intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
