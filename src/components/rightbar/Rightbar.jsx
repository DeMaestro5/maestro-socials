import React from 'react'
import './rightbar.css'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      <div className="birthdayContainer">
      <img src="assets/gift.png" alt="" className="birthdayImg" />
      <span className="birthdayText"><b>Big Ben</b> and <b>5 others</b> have a birthday today</span>
      </div>
      <img src="assets/ad.png" alt="" className="rightbarAD" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendsList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mary Bowen</span>
        </li>
      </ul>
      </div>
      </div>
  )
}

export default Rightbar