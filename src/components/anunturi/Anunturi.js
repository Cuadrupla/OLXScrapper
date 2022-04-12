import { mockData } from "./DateAnunturi";
import { Anunt } from "./Anunt";
export const Anunturi = () => {
  return (
    <div className="section">
      {mockData.map((item) => {
        return (
          <Anunt
            key={item.id}
            title={item.titlu}
            type={item.tip}
            marca={item.marca}
            negociabil={item.negociabil}
            locatie={item.locatie}
            data_postare={item.data_postare}
            stare={item.stare}
            pret={item.pret}
          />
        );
      })}
    </div>
  );
};
