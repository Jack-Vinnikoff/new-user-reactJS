import React from 'react';

export default function DeleteBtn (props) {

    return (
        <button className="delete-btn" onClick={props.showWindow}>Delete</button>
    )
}
// class DeleteBtn extends React.Component {
//     render() {
//         return (
//             <button className="delete-btn">Delete</button>
//         )
//     }
// }
//
// export default DeleteBtn;