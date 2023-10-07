import { MoreVert } from '@material-ui/icons'
import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                  <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                  <span className="postUsername">Stephen Maestro</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
              </div>
            <div className="postCenter">
                <span className="postText">Hey!! it's my first Post.</span>
                <img className='postImg' src="assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/heart.png" alt="" />
                    <img className='likeIcon'  src="assets/like.png" alt="" />
                    <span className="postLikeCounter">40 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">8 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
