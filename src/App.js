import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import UserList from './components/UserList.js';
import NewUserAdd from './components/New User/NewUserAdd';

function App(){
  const [users, setUsers] = useState([]);
  const [isActive, setActive] = useState(true);

  function addUser(name, age ){
    setUsers((prev)=>{
      return [
        ...prev,
        {id: Math.random() ,name: name, age: age}
      ]
    })
  }
  function removeUser(id){
    let filteredUsers = users.filter((user) => {
      return user.id.toString() !== id
    })
    setUsers(filteredUsers);
  }
  function modalActive(isActive){
    setActive(isActive);
  }
  return(
    <>
      <Form OnAddUser={addUser} onModalActive={modalActive}/>
      {isActive && <UserList users={users} OnRemoveUser={removeUser}/>}
    </>
  )
}

export default App;