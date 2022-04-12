import { useState } from "preact/hooks";
import { createContext } from "preact";
import { mockData } from "../components/anunturi/DateAnunturi";

const initialValues = {
  isSearch: false,
  search: "",
  data: [],
  filter: {},
  curentElement: 1,
  pages: 50,
};
export const Context = createContext(initialValues);

const ContextProvider = (props) => {
  //States
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});
  const [curentElement, setCurentElement] = useState(1);
  const [length, setLength] = useState(0);
  const [data, setData] = useState(mockData);

  const debounce = (func, timeout = 1500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const handleChange = debounce((e) => {
    setSearch(e.target.value);
  });

  const clearInput = () => {
    setSearch("");
  };

  const clearFilter = (filtru) => {
    setFilter({ ...filter, [filtru]: null });
    console.log("DAAAAA");
  };

  return (
    <Context.Provider
      value={{
        search,
        handleChange,
        clearInput,
        clearFilter,
        filter,
        setFilter,
        curentElement,
        setCurentElement,
        length,
        setLength,
        data,
        setData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
