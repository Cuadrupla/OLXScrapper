import style from "./style.css";
import Filtre from "../../components/filtre/Filtre";
import { Anunturi } from "../../components/anunturi/Anunturi";

const Home = () => (
  <div className={style.home}>
    <Filtre />
    <Anunturi />
  </div>
);

export default Home;
