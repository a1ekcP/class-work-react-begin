function Country({country}){
    console.log(country)
    return <tr>
        <th>{country.name}</th>
        <th>{country.capital}</th>
        <th>{country.region}</th>
        <th>{country.area}</th>
        <th>{country.population}</th>
      </tr>
}

export default Country;