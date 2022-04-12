import {Filtru} from "./Filtru";
import {mockedData} from './mockedData';
import {useContext} from "preact/hooks";
import {Context} from "../../context/context";

const Filtre = () => {
    const ctx = useContext(Context);
    console.log(ctx);
    const clickHandler = (filterName, value) => {
        console.log(ctx.filter);
        ctx.setFilter({ ...ctx.filter, [filterName]: value })
    };
    return (
        <aside className="menu">
            <div className="box">
                <span className="titlu">Piese auto (80000 -> numar rezultate)</span>
                <div className="tags">
                    {Object.keys(ctx.filter).map(filtru => ctx.filter[filtru] && (
                            <article className="message">
                                <article className="message-header">
                                    <p>{`${filtru} : ${ctx.filter[filtru]}`}</p>
                                    <button className="delete" aria-label="delete" onClick={ctx.clearFilter}/>
                                </article>
                            </article>
                        )
                    )}
                </div>
            </div>
            <ul className="menu-list">
                {mockedData.map((item) => {
                    return (
                        <Filtru
                            key={item.id}
                            title={item.title}
                            options={item.options}
                            clickHandler={clickHandler}
                        />
                    );
                })}
            </ul>
        </aside>
    );
};

export default Filtre;
