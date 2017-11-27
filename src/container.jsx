import React from 'react';
import NewUser from './components/new-user.jsx'
import BtnNewUser from './components/added-new-user-btn.jsx'

class LogicApp extends React.Component {
    render(){
        return (
                <div className="field">
                    <NewUser />
                    <BtnNewUser />
                </div>
        )
    }
}

export default LogicApp;