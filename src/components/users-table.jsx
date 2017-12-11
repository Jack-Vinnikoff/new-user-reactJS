import React from 'react';
import ShowUsers from './show-users.jsx';


export default function UsersTable(props) {
    const {users, showWindow, showName} = props;
    return (
        <div className="field-users-table">
            <div className="field-users-table-head">
                <p>Users</p>
            </div>
            <table width="100%">
                <thead>
                <tr>
                    <th>Users</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {users.map((item) =>
                    <ShowUsers key={item.id}
                        name={item.name}
                        email={item.email}
                        address={item.address}
                        id={item.id}
                        showWindow={()=>showWindow(item.id)}
                        showName={()=>showName(item.name)}
                    />
                )}
                </tbody>

            </table>
        </div>
    )
}