import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async(countrySelected) => {
  let modifiedUrl = url;
  if(countrySelected) {
    modifiedUrl = `${url}/countries/`+ countrySelected;
  }
    try {
       const response = await axios.get(modifiedUrl);
       const modifiedData = {
           confirmed : response.data.confirmed,
           recovered : response.data.recovered,
           deaths : response.data.deaths,
           lastupdated : response.data.lastUpdate
       }
       return modifiedData;
    } catch (error) {
        return error;
    }
}

export const getCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };

export const getDailydata = async () => {
  try {
    const response = await axios.get(`${url}/daily`);
    const modifiedData = response.data.map(({ confirmed, deaths, reportDate }) => ({ confirmed: confirmed.total, deaths: deaths.total, date: reportDate }));
    return modifiedData;
  } catch (error) {
    return error;
  }
}