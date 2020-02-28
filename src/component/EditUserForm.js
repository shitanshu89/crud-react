import React, { useState } from 'react'

const EditUserForm = props => {

    const [user, setuser ] = useState(props.currentUser);

    const handleInputChange =(event)=>{
      const {name,value} = event.target

      setuser({...user, [name]:value})

    }
  return (
    <form onSubmit={
      (event)=> {
        event.preventDefault();

        props.updatuser(user.id, user)

      }
    }>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm