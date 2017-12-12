import React from 'react';
import NewUser from './components/new-user.jsx';
import BtnNewUser from './components/added-new-user-btn.jsx';
import UsersTable from './components/users-table.jsx';
import ModalWin from './components/modal-window.jsx';
import Top from './components/top.jsx';
import {FormErrors} from './components/form-errors.jsx';
import axios from 'axios';



class LogicApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            openWindow:false,
            inputName:'',
            inputEmail:'',
            inputAddress:'',
            nameUsers:'',
            formErrors: {name: '', email: ''},
            nameValid: false,
            emailValid: false

        }
        this.changeInputName = this.changeInputName.bind(this);
        this.changeInputEmail = this.changeInputEmail.bind(this);
        this.changeInputAddress = this.changeInputAddress.bind(this);
        this.addedNewUserBtn = this.addedNewUserBtn.bind(this);
        this.showIsModalWindow = this.showIsModalWindow.bind(this);
        this.showIsName = this.showIsName.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.showIsModalWindow = this.showIsModalWindow.bind(this);
        this.showIsName = this.showIsName.bind(this)
    }

    componentDidMount () {
        this.getUsersAjax();
    }

    // Метод который получает список пользователей из JSON
    getUsersAjax () {
        axios.get('http://localhost:3000/users')
            .then(response => {
                let newUsers = response.data.map((item) => {
                    return {id : item.id, name : item.name, email : item.email, address : item.address.city}
                })
                this.setState({users:newUsers})
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

    //**************************** форма добавления нового пользователя ********
    changeInputName(event) {
        const value = event.target.value;
        const newName =value.charAt(0).toUpperCase()+value.slice(1);
        this.setState({inputName:newName},()=> this.validateFieldName())
    }

    validateFieldName() {
        let nameValid = this.state.inputName;
        if(nameValid.length <3) {
            return this.setState({formErrors: {name: 'Is too a short'}})
        }
        return this.setState({formErrors: {name: ''}})
    }

    changeInputEmail(event) {
        this.setState({inputEmail:event.target.value},()=>console.log(this.state.inputEmail))
    }

    changeInputAddress (event) {
        this.setState({inputAddress:event.target.value},()=>console.log(this.state.inputAddress))
    }

    // Добавление пользователя AJAX
    postUserAjax () {
        axios.post('http://localhost:3000/users/', {
            id:this.newIdUser(),
            name: this.state.inputName,
            email: this.state.inputEmail,
            address: {
                city:this.state.inputAddress
            }

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                alert('Проблема с POST запросам AJAX')
                console.log(error);
            });
    }
1
    addedNewUserBtn () {
        this.postUserAjax();
        setTimeout(()=> this.getUsersAjax(),500);
        this.setState({inputName:'',inputEmail:'',inputAddress:''});

    }

    newIdUser (){
        this.state.users.forEach((item,i)=>{
            let id = this.state.users.length+1;
            console.log("=========",id);
            console.log(this.state.users);
            return id;
        });
    }

    render(){

        //Проводим Деструктуризацию элементов объекта this.state
        const {inputName,inputEmail,inputAddress,users,openWindow} = this.state;

        return (
                <div className="field">
                    <Top />
                    <FormErrors
                        formErrors={this.state.formErrors}
                    />
                    <NewUser
                        changeInputName={this.changeInputName}
                        changeInputEmail={this.changeInputEmail}
                        changeInputAddress={this.changeInputAddress}
                        name={inputName}
                        email={inputEmail}
                        address={inputAddress}

                    />
                    <BtnNewUser
                        newUserClick={this.addedNewUserBtn}
                    />
                    <UsersTable
                        users={users}
                        showWindow={this.showIsModalWindow}
                        showName={this.showIsName}

                    />
                    {openWindow?
                    <ModalWin
                        deleteUser={this.deleteUser}
                        cancel={this.showIsModalWindow}
                        showName={this.showIsName}
                    />:''}
                </div>
        )
    }
}

export default LogicApp;