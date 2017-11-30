import React from 'react';
import NewUser from './components/new-user.jsx'
import BtnNewUser from './components/added-new-user-btn.jsx'
import UserTable from './components/users-table.jsx';
import axios from 'axios';



class LogicApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3000/users')
            .then(response => {
                let newUser = response.data.map((item) => {
                    return {id : item.id, name : item.name, email : item.email, address : item.address.city}
                })
                this.setState({users:newUser})
                //this.setState({id:response.data})
            })

            .catch(function (error) {
                console.log(error);
            });
    }

    //Метод удаления пользователя
    deleteUser(idN) {
        alert(idN);
        axios.delete('http://localhost:3000/users/'+idN,{params : {id:idN}})
            .then(response => {
                console.log(response)

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render(){
        console.log(this.state.users);
        return (
                <div className="field">
                    <NewUser />
                    <BtnNewUser />
                    <UserTable
                        users={this.state.users}
                        delete={this.deleteUser.bind(this)}

                    />
                </div>
        )
    }
}

export default LogicApp;