import { useEffect, useState } from "preact/hooks";
import { createContext } from "preact";

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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


    const getData = () => {
        fetch("http://localhost:3000/announcements")
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
            })
            .catch((res) => {
                console.log(res);
            });
    };
  useEffect(() => {
    getData();
  }, []);

  const debounce = (func, timeout = 1500) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
        console.log("finished loading");
        setIsLoading(false);
      }, timeout);
    };
  };

  const handleChange = debounce((e) => {
    setIsLoading(true);
    console.log("loading...");
    setSearch(e.target.value);
  });

  const clearInput = () => {
    setSearch("");
  };

  const clearFilter = (filtru) => {
      const aux = filter;
      delete aux[filtru];
      setFilter(aux);
      let dataFiltered;
    const getNewData = () => {
        fetch("http://localhost:3000/announcements")
            .then((res) => res.json())
            .then((data) => {
                dataFiltered = data.data;
            })
            .catch((res) => {
                console.log(res);
            });
    };
    getNewData();
    setTimeout(() => {
        console.log(dataFiltered);
        setData(verifyFilter(dataFiltered));
    }, [1000])
  };

  const trailPrice = (strPrice) => {
    const arr = strPrice.split(" ");

    if (arr.length > 2) {
        let str = "";
        for (let i = 0; i < arr.length - 1; i++) {
            str += arr[i];
        }
        return parseInt(str);
    }

    return parseInt(arr[0]);
}
  const verifyFilter = (data) => {
      let filteredData = data;
      for(const filterKey in filter) {
          if(filterKey == "An productie") {
              let [an1, an2] = filter[filterKey].split("-");
              an1 = parseInt(an1);
              an2 = parseInt(an2) ? parseInt(an2) : 3000;
              filteredData = filteredData.filter(el => el.an >= an1 && el.an <= an2);
          }
          if(filterKey == "Pret") {
              let [pret1, pret2] = filter[filterKey].split("-");
              let aux1 = pret1.split(" ")[0];
              let aux2 = pret1.split(" ")[1];
              if(!aux2)
                pret1 = aux1;
              else
                pret1 = aux1 + aux2;
              pret1 = parseInt(pret1);
              if(pret2)
                pret2 = parseInt(pret2);
              else
                pret2 = 999999;
              filteredData = filteredData.filter(el => {const pret = trailPrice(el.pret)
                return pret1 <= pret && pret2 >= pret;
              });
              
          }
          if(filterKey == "Data postarii") {
              let [timp1, timp2] = filter[filterKey].split("-");
              filteredData = filteredData.filter(el => el.data_postare.split(" ")[2] >= timp1 && el.data_postare.split(" ")[2] <= timp2);
          }
          if(filterKey == "Marca"){
              filteredData = filteredData.filter(el => filter[filterKey] == el.marca);
          }
          if(filterKey == "Negociabil") {
              filteredData = filteredData.filter(el => {
                  const isNeg = filter[filterKey] == "da" ? true : false;
                  return el.negociable == isNeg;
              })
          }
          if(filterKey == "Tipul produsului") {
              filteredData = filteredData.filter(el => el.tipProdus == filter[filterKey]);
          }
          if(filterKey == "Stare") {
              filteredData = filteredData.filter(el => el.stare == filter[filterKey]);
          }
          if(filterKey == "Culoare") {
              filteredData = filteredData.filter(el => el.culoare == filter[filterKey]);
          }
          if(filterKey == "Tipul carburantului") {
              filteredData = filteredData.filter(el => el.tipCarburant == filter[filterKey]);
          }
          if(filterKey == "Locatie") {
              filteredData = filteredData.filter(el => el.locatie == filter[filterKey]);
          }
      }
      return filteredData;
  }

  return (
    <Context.Provider
      value={{
        search,
        handleChange,
        clearInput,
        clearFilter,
          verifyFilter,
        filter,
        setFilter,
        curentElement,
        setCurentElement,
        length,
        setLength,
        data,
        setData,
        isLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
