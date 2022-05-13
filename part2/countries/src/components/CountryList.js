const CountryList = ({ countries }) => {
  if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].translations.spa.common}</h2>
        <p>Capital: {countries[0].capital}</p>
        <p>Population: {countries[0].population}</p>
        <img src={countries[0].flags.png}
          alt={`flag of ${countries[0].translations.spa.common}`} />
        <h3>Languages</h3>
        <ul>
          {Object.values(countries[0].languages).map((language) =>
            <li>{language}</li>
          )}
        </ul>
      </div>
    )
  }
  if (countries.length < 10) return (
    <ul>
      {countries.map((countrie) => (
        <li>{countrie.translations.spa.common}</li>
      )
      )}
    </ul>
  )

  return <p>please put a filter with less than 10 results</p>
}
 export default CountryList  