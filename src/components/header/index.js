import style from "./style.css";
import { useContext, useEffect } from "preact/hooks";
import { Context } from "../../context/context";
import React from "react";

const Header = () => {
  const ctx = useContext(Context);
  useEffect(() => {
    if (ctx.search != "") {
      const newArr = ctx.data.filter((item) => item.titlu.toLowerCase().includes(ctx.search.toLowerCase()));
      ctx.setData(newArr);
    } else {
      fetch("http://localhost:3000/announcements")
          .then((res) => res.json())
          .then((data) => {
            ctx.setData(data.data);
          })
          .catch((res) => {
            console.log(res);
          });
    }
  }, [ctx.search]);
  return (
    <header className={`columns ${style.header}`}>
      <h1
        className={`column is-1 is-offset-2 has-text-right mr-0 mt-2 py-auto has-text-black-ter is-size-3 has-text-weight-semibold ${style.logo}`}
      >
        SVG
      </h1>

      <div className="field columns is-5 is-offset-1 mx-auto mt-4 mb-2">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={ctx.search}
            onChange={ctx.handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span
            className="icon is-medium is-right is-clickable"
            onClick={ctx.clearInput}
          >
            X
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
