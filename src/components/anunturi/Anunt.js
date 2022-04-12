import React from "react";

export const Anunt = (props) => {
    return (
        <div className="card">
            <section className="hero is-default is-bold has-shadow">
                <div className="hero-body mb-6">
                    <div className="container has-text-centered">
                        <div className="columns">

                            {/* Imagine anunt */}
                            <div className="column is-5">
                                <figure className="image is-4by3">
                                    <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                                </figure>
                                <p className="is-small is-italic has-text-grey-dark is-capitalized is-flex is-justify-content-space-between">
                                    <span>{props.data_postare}</span>
                                    <span>{props.locatie}</span>
                                </p>
                            </div>

                            {/* Details*/}
                            <div className="column is-7 has-text-left">
                                <div className="is-flex is-justify-content-space-between">
                                <h1 className="title is-5">
                                    {props.title}
                                </h1>
                                    <span className="has-text-grey-darker">{props.pret} RON</span>
                                </div>
                                <h2 className="subtitle is-6">
                                    {props.descriere}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
