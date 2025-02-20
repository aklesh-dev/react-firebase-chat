import "./Detail.css";


const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jhon Doe</h2>
        <p>Lorem, ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photo">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/30453693/pexels-photo-30453693/free-photo-of-traditional-japanese-paper-lanterns-displayed-outdoors.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/30453693/pexels-photo-30453693/free-photo-of-traditional-japanese-paper-lanterns-displayed-outdoors.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            {/* <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/30453693/pexels-photo-30453693/free-photo-of-traditional-japanese-paper-lanterns-displayed-outdoors.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
                <span>photo_2025_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div> */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Detail