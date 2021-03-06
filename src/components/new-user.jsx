import React from 'react';

export default function NewUser (props){
    const {changeInputName, name, changeInputEmail, email, changeInputAddress, address} = props;
    return(
             <div className="field-new-user">

                 <div className="field-new-user-form">
                     <form>
                         <label htmlFor="name">Name</label>
                         <input type="text" id="name"  name="hello"onChange={changeInputName} placeholder="Name" value={name}/><b>*</b>
                         <label htmlFor="age">E-mail</label>
                         <input type="text" id="age" name="email" onChange={changeInputEmail} placeholder="E-mail" value={email}/><b>*</b>
                         <label htmlFor="note">Address</label>
                         <input type="text" id="note" onChange={changeInputAddress} placeholder="Address" value={address}/>
                     </form>
                 </div>
             </div>
    )
}