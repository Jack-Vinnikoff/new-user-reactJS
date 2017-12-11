import React from 'react';

export default function BtnNewUser (props) {
    return (
        <div className="field-btn-create">
            <button type="button" onClick={props.newUserClick}>Добавить</button>
        </div>
    )
}