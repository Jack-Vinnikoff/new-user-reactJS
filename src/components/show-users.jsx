import React from 'react';
import DeleteBtn from './delete-user-btn.jsx'
import EditBtn from './edit-user-btn.jsx';

class ShowUsers extends React.Component {
    render() {
        return (
            <tr>
                <td>Fox</td>
                <td>Fox</td>
                <td>Fox</td>
                <td><DeleteBtn /></td>
                <td><EditBtn /></td>
            </tr>
        )
    }
}
export default ShowUsers;