import React from 'react';
import NewUser from './components/new-user.jsx'
import BtnNewUser from './components/added-new-user-btn.jsx'
import UserHead from './components/users-head.jsx';

class LogicApp extends React.Component {
    render(){
        return (
                <div className="field">
                    <NewUser />
                    <BtnNewUser />
                    <UserHead />
                </div>
        )
    }
}

export default LogicApp;