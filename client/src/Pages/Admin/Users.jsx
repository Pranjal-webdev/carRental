import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        try {

            const res = await axios.get("/api/auth/users");

            setUsers(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">Registered Users</h1>

            <table className="w-full bg-white rounded-xl shadow-lg">

                <thead className="bg-green-900 text-white">

                    <tr>

                        <th className="p-4">Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Role</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.length > 0 ?

                            users.map((user) => (

                                <tr
                                    key={user._id}
                                    className="text-center border-b"
                                >

                                    <td className="p-4">

                                        {user.firstName} {user.lastName}

                                    </td>

                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.state}</td>
                                    <td>{user.city}</td>
                                    <td>{user.role}</td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td colSpan="6" className="text-center p-8"> No Users Found </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

};

export default Users;