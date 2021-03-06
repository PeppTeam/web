import React from "react";
import { Link } from "gatsby";

export const LinkCards = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          {[
            { slug: "om-pepp", title: "Om Pepp" },
            { slug: "kontakt", title: "Kontakt" }
          ].map((i, index) => {
            return (
              <div className="column is-half" key={index}>
                <Link className="box" to={i.slug}>
                  {i.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
