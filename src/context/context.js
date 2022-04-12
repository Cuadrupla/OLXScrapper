import {useEffect, useState} from 'preact/hooks';
import {createContext} from "preact";

const initialValues = {
    isSearch: false,
    search: '',
    data: [],
    filter: {}
};
export const Context = createContext(initialValues);

const ContextProvider = props => {
    //States
    const [isSearch, setIsSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState({})

    const checkValue = () => {
        if (search.trim() === "") {
            setIsSearch(false);
        } else {
            setIsSearch(true);
        }
    }

    const debounce = (func, timeout = 1500) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout)
        }
    }

    const handleChange = debounce((e) => {
        setSearch(e.target.value);
    });

    const clearInput = () => {
        setSearch("");
    }

    const clearFilter = () => {
        console.log("DAAAAA");
    }

    return (
        <Context.Provider
            value={{isSearch, setIsSearch, search, checkValue, handleChange, clearInput, clearFilter, filter, setFilter}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;