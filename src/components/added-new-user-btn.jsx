import React from 'react';

export default function BtnNewUser (props) {
    return (
        <div className="field-btn-create">
            <button type="button" onClick={props.newUserClick}>Добавить</button>
        </div>
    )
}
// class BtnNewUser extends React.Component {
//     render() {
//         return (
//             <div className="field-btn-create">
//                 <button type="submit" onClick={this.props.a}>Добавить</button>
//             </div>
//         )
//     }
// }
//
// export default BtnNewUser;