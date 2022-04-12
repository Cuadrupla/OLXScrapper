import { mockData } from "./DateAnunturi";
import { Anunt } from "./Anunt";
import { useContext, useEffect } from "preact/hooks";
import { Context } from "../../context/context";
import style from "./style.css";
export const Anunturi = () => {
  const ctx = useContext(Context);

  // const filteredData = mockData.filter(element => {
  //     for (let key in ctx.filter) {
  //         if (element[key] === undefined || element[key] !== ctx.filter[key])
  //             return false;
  //     }
  //     return true;
  // })

  ctx.setLength(mockData.length);
  const chosenEl = mockData.filter((item) => item.id == ctx.curentElement)[0];
  return (
    <div className="container is-widescreen">
      <div className="rows">
        {chosenEl && (
          <Anunt
            key={chosenEl.id}
            title={chosenEl.titlu}
            locatie={chosenEl.locatie}
            data_postare={chosenEl.data_postare}
            pret={chosenEl.pret}
            descriere={chosenEl.descriere}
            negociabil={chosenEl.negociabil}
          />
        )}
      </div>
      <nav
        className={`pagination ${
          ctx.curentElement == 1 ? style.nextBtn : "is-centered"
        } mt-6 mx-3`}
        role="navigation"
        aria-label="pagination"
      >
        {ctx.curentElement > 1 && (
          <a
            className="pagination-previous"
            onClick={() => ctx.setCurentElement(ctx.curentElement - 1)}
          >
            Previous
          </a>
        )}
        {ctx.curentElement < ctx.length && (
          <a
            className="pagination-next"
            onClick={() => ctx.setCurentElement(ctx.curentElement + 1)}
          >
            Next
          </a>
        )}
      </nav>
    </div>
  );
};
