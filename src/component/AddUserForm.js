  
import React, { useState } from 'react';


const AddUserForm = props => {

  const initalFromData = {id:'', name:'', username:''}

  const [user, setUser] = useState(initalFromData);

  const handleInputChange = (event) =>{

    const {name, value } = event.target

    setUser({...user, [name]:value})

  }


  return (
    <form onSubmit={
      (event) =>{
        event.preventDefault();
        if (!user.name || !user.username) return
        props.addUser(user);
        setUser(initalFromData)
      }
    }>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm