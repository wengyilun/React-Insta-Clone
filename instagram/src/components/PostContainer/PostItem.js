import React from 'react'
import PostHeader from './PostHeader'
import PostLikes from './PostLikes'
import CommentInput from "../CommentSection/CommentInput";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainers.scss';
import PropTypes from "prop-types"

import moment from 'moment'

const PostItem = (props)=>{
	return (
		<div className="postItemContainer">
			<PostHeader {...props}/>
			<img className="heroImage" src={props.imageUrl} alt="hero"/>
			<div className="bottomContentContainer">
				<PostLikes likes={props.likes}/>
				<CommentSection comments={props.comments}/>
				<time>{moment().startOf('day').fromNow().toUpperCase()}</time>
			</div>
			<CommentInput/>
		</div>
	)
}

PostItem.propTypes ={
	id:PropTypes.string,
	username: PropTypes.string,
	thumbnailUrl: PropTypes.string,
	likes: PropTypes.number,
	timestamp: PropTypes.string,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			id:PropTypes.id,
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
}

export default PostItem

