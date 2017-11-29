import React from 'react';
import NewUser from './components/new-user.jsx'
import BtnNewUser from './components/added-new-user-btn.jsx'
import UserTable from './components/users-table.jsx';


class LogicApp extends React.Component {
    render(){
        return (
                <div className="field">
                    <NewUser />
                    <BtnNewUser />
                    <UserTable />
                </div>
        )
    }
}

export default LogicApp;