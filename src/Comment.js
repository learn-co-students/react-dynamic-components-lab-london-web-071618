import React, { Component } from 'react'

class Comment extends Component {

  render () {
    return (
      <div className='comment' style={{opacity: 2}}>
        {
          this.props.commentText
        }
      </div>
    )
  }
}

export default Comment
