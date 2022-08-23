import { useEffect, useState } from "react";
import Country from "./Country";
import Table from 'react-bootstrap/Table';

function Countries(){
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all').then(res => res.json()).then(data => {
            setCountries(data);
        })
    }, []);

    return <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Area</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(country => <Country country={country}/>)}
                </tbody>
            </Table>
}

export default Countries;