import React, { createContext, useState, useEffect } from 'react';
import useData from '../hooks/fetchApi';

// import data

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const housesData = useData('http://localhost:5000/api/inmuebles/');
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);

  const [business, setBusiness] = useState('Bussines type (any)');
  const [listBusiness, setListBusiness] = useState([]);

  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  console.log('Business: ' + business);

  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

  useEffect(() => {
    const allBussinesType = houses.map((house) => {
      return house.business;
    });

    const uniqueBussines = ['Bussines Type (any)', ...new Set(allBussinesType)];
    setListBusiness(uniqueBussines);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // all values are selected
      if (
        house.country === country &&
        house.business === business &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      // all values are default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(business)
      ) {
        return house;
      }
      // country is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(business)
      ) {
        return house.country === country;
      }
      // property is not default
      if (
        !isDefault(property) &&
        isDefault(country) &&
        isDefault(price) &&
        isDefault(business)
      ) {
        return house.type === property;
      }

      // business is not default
      if (
        !isDefault(business) &&
        isDefault(country) &&
        isDefault(price) &&
        isDefault(business)
      ) {
        console.log('Hola');
        return house.business === business;
      }
      // price is not default
      if (
        !isDefault(price) &&
        isDefault(country) &&
        isDefault(property) &&
        isDefault(business)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // country and property is not default
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(business)
      ) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(business)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(business)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      // // bussines and price is not default
      // if (
      //   isDefault(country) &&
      //   !isDefault(business) &&
      //   !isDefault(price) &&
      //   isDefault(property)
      // ) {
      //   if (housePrice >= minPrice && housePrice <= maxPrice) {
      //     return house.business === business;
      //   }
      // }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        business,
        setBusiness,
        listBusiness,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
