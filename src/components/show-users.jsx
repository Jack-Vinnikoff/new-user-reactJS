import React from 'react';
import DeleteBtn from './delete-user-btn.jsx'
import EditBtn from './edit-user-btn.jsx';

export default function ShowUsers(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
            <td><DeleteBtn
                    showWindow={props.showWindow}
            /></td>
            <td><EditBtn /></td>
        </tr>
    )
}


// class ShowUsers extends React.Component {
//     render() {
//         return (
//             <tr>
//                 <td>{this.props.name}</td>
//                 <td>{this.props.email}</td>
//                 <td>{this.props.address}</td>
//                 <td><DeleteBtn /></td>
//                 <td><EditBtn /></td>
//             </tr>
//         )
//     }
// }
// export default ShowUsers;