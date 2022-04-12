import {Filtru} from "./Filtru";
import {mockedData} from './mockedData';
import {useContext} from "preact/hooks";
import {Context} from "../../context/context";
import style from './styles.css';

const Filtre = () => {
    const ctx = useContext(Context);
    const clickHandler = (filterName, value, setIsClicked) => {
        setIsClicked(false);
        ctx.setFilter({...ctx.filter, [filterName]: value});
    };

    return (
        <aside className="menu">
            <div className="box">
                <span className="titlu">Piese auto - {ctx.length}</span>
                <div className={style.tags}>
                    {Object.keys(ctx.filter).map(filtru => ctx.filter[filtru] && (
                            <article className={"message " + style.tag}>
                                <article className={"message-header " + style.content}>
                                    <p>{`${filtru} : ${ctx.filter[filtru]}`}</p>
                                    <button className="delete" aria-label="delete" onClick={() => ctx.clearFilter(filtru)}/>
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
