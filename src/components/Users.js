import React, { Component } from "react";
import User from "./User";


export default class Users extends Component {

state = {

users : [
{id:"1" ,name : "ali" , age : 20},
{ id:"2" ,name : "samir" , age : 30},
{ id:"3" ,name : "jaja" , age : 50},
{  id:"4" , name : "rami" , age : 10},

]
}

deleteUser = ( index , e) => {
const users = Object.assign([] , this.state.users);
users.splice(index , 1);
this.setState({users:users})

}
changeUserName = (id , e) => {
const index = this.state.users.findIndex((user) => {
return user.id === id 

});
const user = Object.assign({} , this.state.users[index]);
user.name= e.target.value;
const users = Object.assign([] , this.state.users);
users[index] = user;

this.setState({users:users}); 
}



  render() { 
    return <div>

<ul>
{
this.state.users.map((user , index) => {

return (<User  name={user.name}
    key={user.id}
   deleteEvent = {this.deleteUser.bind(this, index)}
  changeEvent = {this.changeUserName.bind(this , user.id)}

>{user.age}</User>)

})
  }

</ul>


    </div>;
  }
}
