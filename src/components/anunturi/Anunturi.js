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

    function displayPagination() {
        let start = ctx.curentPage - 2 < 1 ? 1 : ctx.curentPage - 2;
        let finish = ctx.curentPage + 2 > ctx.pages ? ctx.pages : ctx.curentPage + 2;

        const pagination = document.getElementById("pages");
        while (pagination.firstChild) {
            pagination.removeChild(pagination.lastChild);
        }
        for (let i = start; i <= finish; ++i) {
            let listItem = document.createElement("li");
            listItem.classList.add("pagination-link");
            if (i === ctx.curentPage) {
                listItem.classList.add("has-text-black-bis");
                listItem.classList.add("has-background-grey-lighter");
            }
            listItem.classList.add("is-clickable");
            listItem.addEventListener("click", () => ctx.setPage(i))
            listItem.textContent = String(i);
            pagination.append(listItem);

        }
    }

    useEffect(() => {
        displayPagination();
    }, [ctx.curentPage])
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
                <a className="pagination-previous" onClick={() => ctx.setPage(ctx.curentPage - 1)}>Previous</a>
                <a className="pagination-next" onClick={() => ctx.setPage(ctx.curentPage + 1)}>Next page</a>
                <ul id="pages" className="pagination-list"/>
            </nav>
        </div>
    );
};
