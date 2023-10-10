import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

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
       {Users.map(u => (
        <Online key={u.id} user={u}/>
       ))}
       </ul>
      </div>
      </div>
  )
}

export default Rightbar