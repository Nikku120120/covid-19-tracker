import React from 'react';
import styles from './App.module.css';
import { Graphs, Databoxes, Dropdown } from './components';
import { getData } from './api/index';

class App extends React.Component {
  state = {
    data : {},
    country : ''
  }

  async componentDidMount() {
    const responseData = await getData();
    this.setState({data : responseData})

  };

  onCountryChange = async (countrySelected) => {
    const responseData = await getData(countrySelected);
    this.setState({data : responseData})
    this.setState({country : countrySelected})
  }

  render() {
    const data = this.state.data;
    const country = this.state.country;

    return (
      <div className={styles.container}>
        {/* <div className = {styles.background}> */}
        {/* <img src={coronaImage} alt="COVID-19" /> */}
        <h1>Covid-19</h1>
        Filter by country<Dropdown onCountrychange={this.onCountryChange}/>
        <Databoxes data={data}/>
        <Graphs data={data} country={country}/>
      {/* </div> */}
      </div>
  
    );
  }
}

export default App;