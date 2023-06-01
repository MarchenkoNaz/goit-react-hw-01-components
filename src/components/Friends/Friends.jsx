import './Friends.css'
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
	return (<>
		<ul className="friend-list">
			{friends.map(friend => {
				return (
					<li key={friend.id} className="item">
						{friend.isOnline === true ? <span style={{ backgroundColor: 'green' }} className="status">{friend.status}</span> : <span style={{ backgroundColor: 'red' }} className="status">{friend.status}</span>
						}
						<img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
						<p className="name">{friend.name}</p>
					</li>
				)
			})}
		</ul>
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