import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const Movie = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        facade.fetchData("movie")
            .then(data => {
                setMovieList(data);
            })
    }, []);

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Movies</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>duration</th>
                        <th>location</th>
                        <th>startDate</th>
                        <th>startTime</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieList.map((Movie, index) => (
                            <tr>
                                <td>{Movie.id}</td>
                                <td>{Movie.name}</td>
                                <td>{Movie.duration}</td>
                                <td>{Movie.location}</td>
                                <td>{Movie.startdate}</td>
                                <td>{Movie.starttime}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Movie;