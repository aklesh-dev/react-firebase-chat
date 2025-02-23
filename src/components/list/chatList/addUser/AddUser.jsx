import "./addUser.css";

const AddUser = () => {
  return (
    <section className='addUser'>
      <form action="">
        <input type="text" placeholder="username" name="username"/>
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Jhon Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </section>
  )
}

export default AddUser;