import { Anunt } from "./Anunt";
import { useContext } from "preact/hooks";
import { Context } from "../../context/context";
import style from "./style.css";
export const Anunturi = () => {
  const ctx = useContext(Context);

  ctx.setLength(ctx.data.length);
  const chosenEl = ctx.data.filter((item) => item.id === ctx.curentElement)[0];
  return (
    <div className="container is-widescreen">
        {chosenEl && (
          <Anunt
            key={chosenEl.id}
            title={chosenEl.titlu}
            locatie={chosenEl.locatie}
            data_postare={chosenEl.data_postare}
            pret={chosenEl.pret}
            descriere={chosenEl.descriere}
            negociabil={chosenEl.negociabil}
            marca={chosenEl.marca}
            stare={chosenEl.stare}
            tip={chosenEl.tip}
            an={chosenEl.an}
          />
        )}
      <nav
        className={`pagination ${
          ctx.curentElement === 1 ? style.nextBtn : "is-centered"
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
