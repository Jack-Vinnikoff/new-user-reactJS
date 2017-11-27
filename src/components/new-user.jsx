import React from 'react';

class newUser extends React.Component {
    render(){
        return(
            <div className="field-new-user">
                <div className="field-new-user-top">
                    <p>Добавить нового пользователя</p>
                </div>
                <form>
                    <label>Name</label>
                    <input type="text" id="name" value=""/>
                    <label>Age</label>
                    <input type="text" id="age" value=""/>
                    <label>Note</label>
                    <input type="text" id="note" value=""/>
                </form>
            </div>
        )
    }
}

export default newUser;