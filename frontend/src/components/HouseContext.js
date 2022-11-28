import React, { createContext, useState, useEffect } from 'react';
// import useData from '../hooks/fetchApi';
import axios from 'axios';

// import data

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  // const housesData = useData('http://localhost:5000/api/inmuebles/');
  const [houses, setHouses] = useState([]);
  const [url, setUrl] = useState('http://localhost:5000/api/inmuebles/');
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);

  const [business, setBusiness] = useState('Bussines type (any)');
  const [listBusiness, setListBusiness] = useState([]);

  const [price, setPrice] = useState('ASC');

  const [user, setUser] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setHouses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/inmuebles/distinct')
      .then((res) => {
        setCountries(res.data.countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/inmuebles/distinct')
      .then((res) => {
        setProperties(res.data.types);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/inmuebles/distinct')
      .then((res) => {
        setListBusiness(res.data.bussines);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandleClick = async () => {
    console.log('Hola');
    // const urlNew = `http://localhost:5000/api/inmuebles/filter?business=${business}&type=${property}&location=${country}&order=${price}`;
    // setUrl(urlNew);
    // console.log('Nueva Url' + urlNew);
    // const newData = await axios.get(urlNew);
    // console.log(newData.data);
    // setHouses(newData.data);
    // setTimeout(() => {
    //   console.log(houses);
    // }, 1500);
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
        HandleClick,
        houses,
        business,
        setBusiness,
        listBusiness,
        url,
        setUrl,
        setHouses,
        loading,
        user,
        setUser,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
