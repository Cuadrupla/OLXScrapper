import React from "react";

export const Anunt = (props) => {
  return (
    <div className="card" onClick={() => console.log("salut")}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <p className="title is-5">{props.title}</p>
            <p className="has-text-weight-light">
              {props.descriere.slice(0, 120) +
                (props.descriere.length > 120 ? "..." : "")}
            </p>

            <br />
            <p className="subtitle is-5">
              {props.data_postare} - {props.locatie}
            </p>
          </div>
          <div className="media-content">
            <p className="subtitle is-5 ">{props.pret} lei</p>
            <p className="subtitle is-6">Negociabil: {props.negociabil}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
