import React from 'react';
import NewUser from './components/new-user.jsx'
import BtnNewUser from './components/added-new-user-btn.jsx'
import UsersTable from './components/users-table.jsx';
import ModalWin from './components/modal-window.jsx'
import axios from 'axios';



class LogicApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            openWindow:false,
            idUsers:0,
            inputName:'',
            inputEmail:'',
            inputAddress:'',
            nameUsers:''

        }
    }

    componentDidMount () {
        this.getUsersAjax();
    }

    // Метод который получает список пользователей из JSON
    getUsersAjax () {
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

    //Метод который удаляет пользователя из списка JSON
    deleteUsersAjax (param) {
        axios.delete('http://localhost:3000/users/'+param,{params : {id:param}})
            .then(response => {
                console.log(response)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //Открывает окно подтверждение удаления пользователя
    showIsModalWindow (idN) {

        this.setState({openWindow:!this.state.openWindow,idUsers:idN})
    }


    //Метод который показывает имя пользователя которого хотят удалить
    showIsName (name) {
        this.setState({nameUsers:name},()=>console.log(this.state.nameUsers))

    }

    // Метод удаления пользователя
    deleteUser(){
        const id = this.state.idUsers;
        setTimeout(()=> this.getUsersAjax(),500);
        this.deleteUsersAjax(id);

        this.showIsModalWindow();
    }

    changeInputName(event) {
        this.setState({inputName:event.target.value},()=>console.log(this.state.inputName))
    }

    changeInputEmail(event) {
        this.setState({inputEmail:event.target.value},()=>console.log(this.state.inputEmail))
    }

    changeInputAddress (event) {
        this.setState({inputAddress:event.target.value},()=>console.log(this.state.inputAddress))
    }

    render(){
        return (
                <div className="field">
                    <NewUser
                        changeInputName={this.changeInputName.bind(this)}
                        changeInputEmail={this.changeInputEmail.bind(this)}
                        changeInputAddress={this.changeInputAddress.bind(this)}
                    />
                    <BtnNewUser />
                    <UsersTable
                        users={this.state.users}
                        showWindow={this.showIsModalWindow.bind(this)}
                        showName={this.showIsName.bind(this)}

                    />
                    {this.state.openWindow?
                    <ModalWin
                        delete={this.deleteUser.bind(this)}
                        cancel={this.showIsModalWindow.bind(this)}
                        showName={this.showIsName.bind(this)}
                    />:''}
                </div>
        )
    }
}

export default LogicApp;