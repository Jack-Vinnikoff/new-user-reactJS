import React from 'react';
import DeleteBtn from './delete-user-btn.jsx'

class ShowUsers extends React.Component {
    render() {
        return (
            <tr>
                <td>Fox</td>
                <td>Fox</td>
                <td>Fox</td>
                <td><DeleteBtn /></td>
                <td>Fox</td>
            </tr>
        )
    }
}
export default ShowUsers;