// import './Profile.css'
import PropTypes from "prop-types";
import { WrapperCard, DescriptionOfCard, ImgUser, UserData, UserName, StatOfUser, ItemOfStat, MoreStylishItemOfStat, LabelOfStat, QuantityOfStat } from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
	return (
		<WrapperCard>
			<DescriptionOfCard>
				<ImgUser
					src={avatar}
					alt="User avatar"
					className="avatar"
				/>
				<UserName>{username}</UserName>
				<UserData>@{tag}</UserData>
				<UserData>{location}</UserData>
			</DescriptionOfCard>

			<StatOfUser>
				<ItemOfStat>
					<LabelOfStat className="label">Followers</LabelOfStat>
					<QuantityOfStat className="quantity">{followers}</QuantityOfStat>
				</ItemOfStat>
				<MoreStylishItemOfStat>
					<LabelOfStat className="label">Views</LabelOfStat>
					<QuantityOfStat className="quantity">{views}</QuantityOfStat>
				</MoreStylishItemOfStat>
				<ItemOfStat>
					<LabelOfStat className="label">Likes</LabelOfStat>
					<QuantityOfStat className="quantity">{likes}</QuantityOfStat>
				</ItemOfStat>
			</StatOfUser>
		</WrapperCard>
	)
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	})

}

export default Profile