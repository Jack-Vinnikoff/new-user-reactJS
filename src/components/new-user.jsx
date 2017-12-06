import React from 'react';

export default function newUser (props){
    return(
             <div className="field-new-user">
                 <div className="field-new-user-top">
                     <p>Добавить нового пользователя</p>
                 </div>
                 <div className="field-new-user-form">
                     <form>
                         <label htmlFor="name">Name</label>
                         <input type="text" id="name" onChange={props.changeInputName} placeholder="Name"/>
                         <label htmlFor="age">E-mail</label>
                         <input type="text" id="age" onChange={props.changeInputEmail} placeholder="E-mail"/>
                         <label htmlFor="note">Address</label>
                         <input type="text" id="note" value="" placeholder="Address"/>
                     </form>
                 </div>
             </div>
    )
}

// class newUser extends React.Component {
//     render(){
//         return(
//             <div className="field-new-user">
//                 <div className="field-new-user-top">
//                     <p>Добавить нового пользователя</p>
//                 </div>
//                 <div className="field-new-user-form">
//                     <form>
//                         <label htmlFor="name">Name</label>
//                         <input type="text" id="name" value="" placeholder="Name"/>
//                         <label htmlFor="age">Age</label>
//                         <input type="text" id="age" value="" placeholder="Age"/>
//                         <label htmlFor="note">Note</label>
//                         <input type="text" id="note" value="" placeholder="Note"/>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default newUser;