import { h } from "preact";
import style from "./style.css";
import Filtre from "../../components/filtre/Filtre";
const Home = () => (
  <div class={style.home}>
    <Filtre />
  </div>
);

export default Home;
