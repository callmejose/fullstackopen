import { useState } from "react"
import Weather from "./Weather"

const CountryView = ({ countrie }) => {
  console.log('countrie: ', countrie)
  if (countrie.cioc === "NaN") return <></>
  const [latitude, longitude] = countrie.capitalInfo.latlng
  return (
    <div>
      <h2>{countrie.translations.spa.common}</h2>
      <p>Capital: {countrie.capital}</p>
      <p>Population: {countrie.population}</p>
      <img src={countrie.flags.png}
        alt={`flag of ${countrie.translations.spa.common}`} />
      <h3>Languages</h3>
      <ul>
        {Object.values(countrie.languages).map((language) =>
          <li>{language}</li>
        )}
      </ul>
      <Weather latitude={latitude} longitude={longitude} />
    </div>
  )
}


const CountryList = ({ countries }) => {
  const [countrieToShow, setCountrieToShow] = useState({ cioc: "NaN" })

  if (countries.length === 1) {
    return (
      <CountryView countrie={countries[0]} />
    )
  }
  if (countries.length < 10) return (
    <div>
      <ul>
        {countries.map((countrie) => (
          <li key={countrie.cioc}>
            {countrie.translations.spa.common}
            <button onClick={() => setCountrieToShow(countrie)}>show</button>
          </li>
        )
        )}
      </ul>
      <CountryView countrie={countrieToShow} />
    </div>
  )

  return <p>please put a filter with less than 10 results</p>
}
export default CountryList  