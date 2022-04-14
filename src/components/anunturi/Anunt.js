import React from "react";
import {useEffect} from "preact/hooks";

export const Anunt = (props) => {
    console.log(props.stare);
    const displayStare = () => {
        if (props.stare.toLowerCase().includes("bun")) {
            appendStarsToQuality(3, 2);
        } else if (props.stare.toLowerCase().includes("foarte")) {
            appendStarsToQuality(4, 1);
        } else if (props.stare.toLowerCase().includes("sec")) {
            appendStarsToQuality(2, 3);
        } else if (props.stare.toLowerCase().includes("ra")) {
            appendStarsToQuality(1, 4);
        } else if (props.stare.toLowerCase().includes('excel')) {
            appendStarsToQuality(5, 0);
        }
    }

    const appendStarsToQuality = (fullStars, emptyStars) => {


        const stare = document.getElementById("stare");

        for (let i = 0; i < fullStars; ++i) {
            const fullStar = document.createElement("i");
            fullStar.classList.add('fa-solid');
            fullStar.classList.add('fa-star');
            stare.appendChild(fullStar);
        }
        for (let i = 0; i < emptyStars; ++i) {
            const emptyStar = document.createElement("i");
            emptyStar.classList.add('fa-light');
            emptyStar.classList.add('fa-star');
            stare.appendChild(emptyStar);
        }
    }

    useEffect(() => {
        displayStare();
    }, []);
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
                                    <h1 className="title is-5 mb-1">
                                        {props.title} {props.an ? `(${props.an})` : ""}
                                    </h1>
                                    <span className="has-text-grey-darker">{props.pret} RON</span>
                                </div>
                                <h2 className="subtitle is-6 has-text-weight-medium">
                                    Marca: {props.marca}
                                </h2>
                                <p>{props.descriere}</p>
                                <div className="is-flex is-justify-content-space-between mt-6">
                                    <div id="stare">
                                        Stare:
                                    </div>
                                    <div className="has-text-weight-bold">
                                        Negociabil: {props.negociabil}
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
