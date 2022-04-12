import { useState } from "preact/hooks";

export const Filtru = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="card">
      <li class="navbar-item">
        <div className={`dropdown ${isClicked && "is-active"}`}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={() => setIsClicked(!isClicked)}
            >
              <span>{props.title}</span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {props.options.map((option) => {
                return (
                  <div>
                    <button
                      class="button is-info is-inverted dropdown-item"
                      onClick={() => props.clickHandler(option)}
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
