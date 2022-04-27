import { Anunt } from "./Anunt";
import { useContext, useEffect } from "preact/hooks";
import { Context } from "../../context/context";
import style from "./style.css";
export const Anunturi = () => {
  const ctx = useContext(Context);
  useEffect(() => {
    const data = ctx.verifyFilter(ctx.data);
    ctx.setData(data);
  }, [ctx.filter])

  ctx.setLength(ctx.data.length);

  return (
    <div className="container is-widescreen">
      {ctx.data.map((chosenEl) => (
        <Anunt
          key={chosenEl._id}
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
          img={chosenEl.img}
        />
      ))}
    </div>
  );
};
