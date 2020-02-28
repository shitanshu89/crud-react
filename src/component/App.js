import React from 'react';
import UserTable from './UserTable';
import AdduserForm from './AddUserForm';
import EditUserFrom from './EditUserForm';
import { useState } from 'react';

const App = () => {

    const userdata = [
        {id:1, name:'ashu', username:'shitanshusaini'},
        {id:2, name:'jon', username:'jon123'}
    ]

    const [users, setUsers] = useState(userdata)
    const addUser = (user) =>{
        user.id = users.length+1
        setUsers([...users, user])

    }

    const [editing, setEditing] = useState(false);

    const initFromUserData = { id: null, name: '', username: '' }

    const [currentUser, setCurrentUser] = useState(initFromUserData)


    const deleteUser = (id) =>{
        console.log(id);
        setUsers(users.filter(user => user.id !== id));
    }

    const edituser = (user)=> {
        setEditing(true);
        setCurrentUser({id: user.id, name:user.name, username:user.username})
    }

    const updatuser = (id, updateuser)=>{
        setEditing(false);

        setUsers(users.map(user => user.id === id ? updateuser: user))
}


    return (
        <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            {
                editing ? <EditUserFrom  updatuser={updatuser} currentUser={currentUser} setEditing ={setEditing}/>:<AdduserForm addUser= {addUser}/>
            }
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users= {users} edituser={edituser} deleteUser={deleteUser}/>
          </div>
        </div>
      </div>
    );
}


export default App; 