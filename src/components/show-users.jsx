import React from 'react';
import DeleteBtn from './delete-user-btn.jsx'
import EditBtn from './edit-user-btn.jsx';

export default function ShowUsers(props) {
    const {name, email, address, showWindow} = props;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td><DeleteBtn
                    showWindow={showWindow}
            /></td>
            <td><EditBtn /></td>
        </tr>
    )
}