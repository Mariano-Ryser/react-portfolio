
import React, { Component } from 'react'
import PostData from "../data/Api.json"

const Post = () => {
  return (
    <div>
        <h1>Hallo</h1>
        {
            PostData.map((postDetail, index) => {
                return <div>
                <h1>{postDetail.title}</h1>
                <p>{postDetail.content}</p>
                </div>
            })
        }
    </div>
  )
}

export default Post

