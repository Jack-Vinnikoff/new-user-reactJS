import React from 'react';
import NewUser from './components/new-user.jsx'

class LogicApp extends React.Component {
    render(){
        return (
                <div className="field">
                    <NewUser />
                </div>
        )
    }
}

export default LogicApp;