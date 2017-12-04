import React from 'react';
import ReactDom from 'react-dom';

export default function ModalWin (props) {
        return ReactDom.createPortal(
            <div>
                <input type="button" value="Yes" onClick={props.yes}/>
                <input type="button" value="Cancel" onClick={props.delete}/>
            </div>,
            document.getElementById('modal-window')
        )
}