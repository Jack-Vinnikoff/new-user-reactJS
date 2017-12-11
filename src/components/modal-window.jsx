import React from 'react';
import ReactDom from 'react-dom';

export default function ModalWin (props) {
    const {deleteUser, cancel} = props;

    return ReactDom.createPortal(
            <div className="modal-window">
                <div className="modal-window-background"></div>
                <div className="modal-window-view">
                    <div>
                        <p>Вы действительно хотите удалить пользователя ?</p>
                    </div>
                    <div className="modal-window-view-buttons">
                        <input type="button" value="Yes" onClick={deleteUser}/>
                        <input type="button" value="Cancel" onClick={cancel}/>
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
}