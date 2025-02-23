import { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="plus" className="add"
          onClick={() => setAddMode(prev => !prev)} />
      </div>
      {/* chat item */}
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
        <span>Izumi Dirama</span>
        <p>Hello World!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
        <span>Izumi Dirama</span>
        <p>Hello World!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
        <span>Izumi Dirama</span>
        <p>Hello World!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
        <span>Izumi Dirama</span>
        <p>Hello World!</p>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList