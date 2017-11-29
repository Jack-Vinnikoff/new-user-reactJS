import React from 'react';
import ShowUsers from './show-users.jsx';


export default function UsersTable(props) {
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
                {props.users.map((item) =>
                    <ShowUsers
                        name={item.name}
                        email={item.email}
                        address={item.address}
                    />
                )}
                </tbody>

            </table>
        </div>
    )
}
// class UsersTable extends React.Component {
//     render(){
//         return (
//             <div className="field-users-table">
//                 <div className="field-users-table-head">
//                     <p>Users</p>
//                 </div>
//                 <table width="100%">
//                     <thead>
//                         <tr>
//                             <th>Users</th>
//                             <th>Email</th>
//                             <th>Address</th>
//                             <th>Delete</th>
//                             <th>Edit</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {this.props.users.map((item) =>
//                         <ShowUsers
//                             name={item.name}
//                             email={item.email}
//                             address={item.address}
//                         />
//                     )}
//                     </tbody>
//
//                 </table>
//             </div>
//         )
//     }
// }
// export default UsersTable;