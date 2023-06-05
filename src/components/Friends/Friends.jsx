// import './Friends.css'
import PropTypes from "prop-types";
import { FriendsUl } from './Friends.styled'
import FriendsItem from './FriendItem'

const FriendsList = ({ props }) => {
	return (<>
		<FriendsUl>
			{props.map(friend => {
				return <FriendsItem key={friend.id} avatar={friend.avatar} name={friend.name} status={friend.isOnline} />
			})}
		</FriendsUl>
	</>)
}

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		avatar: PropTypes.string.isRequired,
	}))
}

export default FriendsList

