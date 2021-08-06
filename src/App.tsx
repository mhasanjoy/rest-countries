import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';

interface ICountry {
  name: string;
  flag: string;
  alpha3Code: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
}

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setSpinner(false);
      });
  }, []);

  return (
    <main className="container">
      <h1 className="text-center m-5 pb-5">Countries</h1>
      {
        spinner &&
        <section className="text-center m-5 p-5 fs-4">
          <div className="spinner-border text-danger" role="status" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      }
      <section className="row g-5">
        {
          countries.map(country => <Country key={country.alpha3Code} country={country} />)
        }
      </section>
    </main>
  );
}

export default App;
