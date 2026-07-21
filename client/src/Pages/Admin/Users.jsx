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

        <div className="p-4 md:p-8">

            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Registered Users</h1>

            <div className="overflow-x-scroll rounded-xl shadow-lg">

                <table className="min-w-[800px] md:min-w-full bg-white">

                    <thead className="bg-green-900 text-white">

                        <tr>

                            <th className="table-head">Name</th>
                            <th className="table-head">Email</th>
                            <th className="table-head">Phone</th>
                            <th className="table-head">State</th>
                            <th className="table-head">City</th>
                            <th className="table-head">Role</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            users.length > 0 ?

                                users.map((user) => (

                                    <tr
                                        key={user._id}
                                        className="text-center border-b hover:bg-gray-50"
                                    >

                                        <td className="px-5 py-4 text-[11px] md:text-base whitespace-nowrap">

                                            {user.firstName} {user.lastName}

                                        </td>

                                        <td className="table-cell">{user.email}</td>
                                        <td className="table-cell">{user.phone}</td>
                                        <td className="table-cell">{user.state}</td>
                                        <td className="table-cell">{user.city}</td>
                                        <td className="table-cell">{user.role}</td>

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

        </div>

    );

};

export default Users;