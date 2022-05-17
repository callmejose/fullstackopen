import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        console.log('promise fulfilled', json)
        setCountries(json)
      })
  }, [])

  const countriesToShow = countries.filter(countrie =>
    countrie.translations.spa.common
      .toLowerCase().includes(search))
  console.log('countriesToShow: ', countriesToShow)

  const searchHandler = (event) => {
    console.log('searchHandler search: ', search)
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter />
      <input type='text' value={search} onChange={searchHandler} />
      <CountryList countries={countriesToShow} />
    </div>
  )
}

export default App;
