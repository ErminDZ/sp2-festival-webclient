import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facade from "../apiFacade";

const Guest = () => {
    const [guestList, setGuestList] = useState([]);
    useEffect(() => {
        facade.fetchData("guest")
            .then(data => {
                setGuestList(data);
            })
    }, []);

    const [query, setQuery] = useState("");

    return (

        //<main style={{ padding: "1rem 0" }}>

        <div>
            <h2>Guests</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guestList.map((Guest, index) => (
                            <tr>
                                <td>{Guest.id}</td>
                                <td>{Guest.name}</td>
                                <td>{Guest.phone}</td>
                                <td>{Guest.email}</td>
                                <td>{Guest.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Guest;