import {useState} from "preact/hooks";

export const Filtru = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="card">
            <li class="navbar-item">
                <div className={`dropdown ${isClicked && "is-active"} container`}
                >
                    <div className="dropdown-trigger container is-fullwidth">
                        <button
                            className="button is-fullwidth is-justify-content-space-between"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            onClick={() => setIsClicked(!isClicked)}
                        >
                            <span>{props.title}</span>
                            {/*<span className={`${style.dropdownIcon} has-text-black is-large`}> > </span>*/}
                            <span className="icon is-small">
                                <i className={`fas ${isClicked ? 'fa-angle-up' : 'fa-angle-down'}`} aria-hidden="true"/>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {props.options.map((option) => {
                                return (
                                    <div>
                                        <button
                                            className="button is-info is-inverted dropdown-item"
                                            onClick={() => props.clickHandler(props.title, option, setIsClicked)}
                                        >
                                            {option}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};
