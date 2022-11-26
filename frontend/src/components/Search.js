import React, { useContext, useEffect, useCallback } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import BussinesDropDown from './BussinesDropDown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';
import axios from 'axios';

const Search = () => {
  const { setUrl, business, property, country, price, url, setHouses, houses } =
    useContext(HouseContext);

  // const newUrl = async () => {
  //   console.log('Nueva url ' + url);
  //   const { data } = await axios.get(url);
  //   console.log(data);
  //   setHouses(data);
  //   console.log('Filtro ' + houses);
  // };

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <BussinesDropDown />

      <button
        onClick={async () => {
          setUrl(
            `http://localhost:5000/api/inmuebles/filter?business=${business}&type=${property}&location=${country}&order=${price}`
          );
          const { data } = await axios.get(url);
          console.log(data);
          setHouses(data);
          console.log('Filtro ' + houses);
        }}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
