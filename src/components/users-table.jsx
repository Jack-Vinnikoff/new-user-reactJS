import React from 'react';

class UsersTable extends React.Component {
    render(){
        return (
            <div className="field-users-head">
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
                </table>
            </div>
        )
    }
}

export default UsersTable;