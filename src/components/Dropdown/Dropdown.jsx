import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Dropdown.module.css';
import { getCountries } from '../../api';

const Dropdown = (props) => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
        const fetchCountries = async () => {
        setCountries(await getCountries());
      };
      fetchCountries();
    }, []);

    return (
        <FormControl>
            <NativeSelect className={styles.dropdown} onChange={(e)=> props.onCountrychange(e.target.value)}>
                <option value="">All</option>
            {countries.map((country, i) => <option key ={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Dropdown;