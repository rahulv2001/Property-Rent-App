import React, { useEffect, useState } from "react";
import List from "../../components/List/List";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./styles.css";
import { dataList } from "../../dummyData/dummyData";
import EmptyView from "../../components/EmptyView/EmptyView";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputType, setInputType] = useState("");
  const [resultFound, setResultFound] = useState(false);
  const [search, setSearch] = useState(false);

  const handleSearchInput = (e) => {
    setInputSearch(e.target.value);
  };

  const generateDataForDropDown = () => {
    return [...new Set(dataList.map((item) => item.location))];
  };
  const generatePropertyType = () => {
    return [...new Set(dataList.map((item) => item.type))];
  };

  const handleFilterTitle = (e) => {
    setInputLocation(e.target.value);
  };

  const handlePrice =(e)=>{
    setInputPrice(e.target.value)
  }

  const handleDate = (e)=>{
    setInputDate(e.target.value);
  }

  const handleType =(e)=>{
    setInputType(e.target.value);
  }




  const applyFilter = () => {
    let updatedList = dataList;

    // search filter
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    //Location filter
    if (inputLocation) {
      updatedList = updatedList.filter((item) => item.location === inputLocation);
    }

    // Price filter
    let minPrice = parseInt(inputPrice.substring(0,4));
    let maxPrice = parseInt(inputPrice.substring(5,9));
    if(inputPrice){
      updatedList = updatedList.filter((item)=>(item.price >= minPrice && item.price <= maxPrice))
    }

    // Date filter
    let d = parseInt(inputDate.substring(8,10));
    let m = parseInt(inputDate.substring(5,7));
    let y = parseInt(inputDate.substring(0,4));

    if(inputDate){
      // eslint-disable-next-line
      updatedList = updatedList.filter((item)=>{
        let d1 = parseInt(item.date.substring(8,10));
        let m1 = parseInt(item.date.substring(5,7));
        let y1 = parseInt(item.date.substring(0,4));
        if(y1 < y){
          return parseInt(item.date.substring(0,4));
        }else if(y1 === y){
          let totalDays1 = 30*(m1-1) + d1;
          let totalDays = 30*(m-1) + d;
          if(totalDays1 <= totalDays){
            return parseInt(item.date.substring(5,7));
          }
        }
      })
    }

    //Property Filter
    if(inputType){
      updatedList = updatedList.filter((item)=>(item.type === inputType))
    }

    setList(updatedList);

    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  const handleSearch = () =>{
    // applyFilter();
    setSearch((prev)=>!prev)
  }

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line
  }, [inputSearch, search]);

  return (
    <div className="home">
      <Navbar />
      {/* Search */}
      <div className="search_wrap">
        <SearchBar value={inputSearch} changeInput={handleSearchInput} />
      </div>

      <div className="filter_list_wrap">
        <div className="home_filter_wrap">
          <FilterPanel
            locations={generateDataForDropDown()}
            locationvalue={inputLocation}
            changeLocation={handleFilterTitle}
            pricevalue={inputPrice}
            changePrice={handlePrice}
            datevalue={inputDate}
            changeDate={handleDate}
            types={generatePropertyType()}
            typevalue={inputType}
            changeType={handleType}
            searchvalue={search}
            handleSearch={handleSearch}
          />
        </div>
        <div className="home_list_wrap">
          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
