import {mockData} from "./DateAnunturi";
import {Anunt} from "./Anunt";
import {useContext, useEffect} from "preact/hooks";
import {Context} from "../../context/context";

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

    return (
        <div className="container is-widescreen">
            <div className="rows">
                {mockData.map((item) => {
                    return (
                        <Anunt
                            key={item.id}
                            title={item.titlu}
                            locatie={item.locatie}
                            data_postare={item.data_postare}
                            pret={item.pret}
                            descriere={item.descriere}
                            negociabil={item.negociabil}
                        />
                    );
                })}

            </div>
            <nav className="pagination is-centered mt-6 mx-3" role="navigation" aria-label="pagination">
                <a className="pagination-previous" onClick={() => ctx.setPage(ctx.curentElement - 1)}>Previous</a>
                <a className="pagination-next" onClick={() => ctx.setPage(ctx.curentElement + 1)}>Next</a>
            </nav>
        </div>
    );
};
