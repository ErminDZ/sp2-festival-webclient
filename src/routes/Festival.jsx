import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const Festival = () => {
    const [FestivalList, setFestivalList] = useState([]);
    useEffect(() => {
        facade.fetchData("festival")
            .then(data => {
                setFestivalList(data);
            })
    }, []);

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Festivals</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>city</th>
                        <th>startDate</th>
                        <th>duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FestivalList.map((Festival, index) => (
                            <tr>
                                <td>{Festival.id}</td>
                                <td>{Festival.name}</td>
                                <td>{Festival.city}</td>
                                <td>{Festival.startDate}</td>
                                <td>{Festival.duration}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Festival;