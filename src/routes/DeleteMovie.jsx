import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const DeleteMovie = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        facade.fetchData("movies")
            .then(data => {
                setMovieList(data);
            })
    }, []);

    function DeleteMovie(id) {
        let conFirmmAction = confirm(`Are you sure you want to delete movie ${id}?`)
        if (conFirmmAction) {
            facade.deleteData(`movie/delete/${id}`)
                .then(data => {
                    setMovieList(data);
                    alert(`Deleted movie ${id}`)
                })
        } else {
            alert("Action cancelled")
        }
    }

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Delete movie</h2>
            <h3>Select a movie to delete it from the database:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Make</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Harbour ID</th>
                        <th>Owner ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieList.map((Movie, index) => (
                            <tr onClick={() => DeleteMovie(Movie.id)}>
                                <td>{Boat.id}</td>
                                <td>{Boat.brand}</td>
                                <td>{Boat.make}</td>
                                <td>{Boat.name}</td>
                                <td>{Boat.image}</td>
                                <td>{Boat.harbourId}</td>
                                <td>{Boat.ownerId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DeleteMovie;