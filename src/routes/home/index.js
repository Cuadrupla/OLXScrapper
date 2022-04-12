import style from "./style.css";
import Filtre from "../../components/filtre/Filtre";

const Home = () => (
    <div className={style.home}>
        <Filtre/>
        <div>
            Anunturi
        </div>
    </div>
);

export default Home;
