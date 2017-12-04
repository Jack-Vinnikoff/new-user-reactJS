import React from 'react';
import NewUser from './components/new-user.jsx'
import BtnNewUser from './components/added-new-user-btn.jsx'
import UserTable from './components/users-table.jsx';
import ModalWin from './components/modal-window.jsx'
import axios from 'axios';



class LogicApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            openWindow:false,

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
                alert('Проблема с AJAX запросам')
            });
    }

    deleteAnswer(answ){
        console.log('===========',answ);
    }




    //Метод удаления пользователя
    deleteUser(idN) {
        alert(idN);
        this.setState({openWindow:!this.state.openWindow})
        this.deleteAnswer(idN);
        if(this.deleteAnswer === 'popa'){
            alert('YES');
            // axios.delete('http://localhost:3000/users/'+idN,{params : {id:idN}})
            //     .then(response => {
            //         console.log(response)
            //
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });

        }
        else {
            return false
        }

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
                    {this.state.openWindow?
                    <ModalWin
                        isOpen={this.state.openWindow}
                        yes={this.deleteAnswer}

                    />:''}
                </div>
        )
    }
}

export default LogicApp;