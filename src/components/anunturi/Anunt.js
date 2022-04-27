import React from "react";
import { useEffect } from "preact/hooks";

export const Anunt = (props) => {
  return (
    <div className="box">
      <section className="hero is-default is-bold has-shadow">
        <div className="hero-body mb-6">
          <div className="container has-text-centered">
            <div className="columns">
              {/* Imagine anunt */}
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img src={props.img} alt="Description" />
                </figure>
                <p className="is-small is-italic has-text-grey-dark is-capitalized is-flex is-justify-content-space-between">
                  <span>{props.data_postare}</span>
                  <span>{props.locatie}</span>
                </p>
              </div>
              {/* Details*/}
              <div className="column is-7 has-text-left">
                <div className="is-flex is-justify-content-space-between">
                  <h1 className="title is-5 mb-1">
                    {props.title} (An: {props.an})
                  </h1>
                  <span className="has-text-grey-darker">{props.pret}</span>
                </div>
                <h2 className="subtitle is-6 has-text-weight-medium">
                  Marca: {props.marca}
                </h2>
                <p>{props.descriere}</p>
                <div className="is-flex is-justify-content-space-between mt-6">
                  <div id="stare">Stare: {props.stare}</div>
                  <div className="has-text-weight-bold">
                    Negociabil: {props.negociabil ? "DA" : "NU"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
