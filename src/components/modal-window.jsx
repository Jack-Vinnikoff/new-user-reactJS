import React from 'react';
import ReactDom from 'react-dom';

// export default class ModalWin extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             delete:false
//         }
//     }
//     deleteUser(){
//
//         return this.setState({delete:true})
//     }
//     render () {
//         return ReactDom.createPortal(
//             <div className="modal-window">
//                 <div className="modal-window-background"></div>
//                 <div className="modal-window-view">
//                     <div>
//                         <p>Вы действительно хотите удалить пользователя ?</p>
//                     </div>
//                     <div className="modal-window-view-buttons">
//                         <input type="button" value="Yes" onClick={()=>this.props.yes(this.deleteUser.bind(this))}/>
//                         <input type="button" value="Cancel" onClick={this.props.no}/>
//                     </div>
//                 </div>
//             </div>,
//             document.getElementById('modal')
//         )
//     }
//
// }
export default function ModalWin (props) {
    return ReactDom.createPortal(
            <div className="modal-window">
                <div className="modal-window-background"></div>
                <div className="modal-window-view">
                    <div>
                        <p>Вы действительно хотите удалить пользователя ?</p>
                    </div>
                    <div className="modal-window-view-buttons">
                        <input type="button" value="Yes" onClick={props.delete}/>
                        <input type="button" value="Cancel" onClick={props.cancel}/>
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
}