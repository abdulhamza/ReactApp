
import React, { useEffect, useState } from 'react';
import "./index.css";
const Temp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("karachi")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=e0ff048d5a37b0e012f4b7d2ba566222`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])
    return (
        <>
        <h1 className="Header">Check Weather Updates</h1>
            <div className="box">
                <div className="inputData">
                    <input value={search}type="text" placeholder="search" className="inputField" onChange={(event) => { setSearch(event.target.value) }} />

                </div>

                {!city ? (<p><b> No Data Found </b></p>) : (
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>

                            <h1 className="temp">
                                {city.temp}°C
                            </h1>
                            <h3 className="tempmin_max" >
                             Min :  {city.temp_min}°C   | Max : {city.temp_max}°C
                             </h3>

                        </div>
                    </>

                )}


            </div>
        </>

    );
}

export default Temp;



