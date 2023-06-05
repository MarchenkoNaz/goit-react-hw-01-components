import PropTypes from "prop-types";
import { FriendLItem, FriendOnline, FriendOffline, FriendName } from './Friends.styled'


const FriendsItem = ({ id, name, status, avatar }) => {
	return (<>
		<FriendLItem key={id} >
			{status === true ? <FriendOnline /> : <FriendOffline />
			}
			<img className="avatar" src={avatar} alt={name} width="48" />
			<FriendName>{name}</FriendName>
		</FriendLItem>
	</>)
}

export default FriendsItem

FriendsItem.propTypes = {
	friends: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		avatar: PropTypes.string.isRequired,
	})
}
