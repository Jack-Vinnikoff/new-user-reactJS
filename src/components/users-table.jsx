import React from 'react';
import ShowUsers from './show-users.jsx';

class UsersTable extends React.Component {
    render(){
        return (
            <div className="field-users-table">
                <div className="field-users-table-head">
                    <p>Users</p>
                </div>
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>Age</th>
                            <th>Note</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShowUsers />
                    </tbody>

                </table>
            </div>
        )
    }
}
console.log(22232);
export default UsersTable;