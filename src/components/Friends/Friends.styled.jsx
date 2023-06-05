import styled from 'styled-components'

const FriendsUl = styled.ul`
	margin-top: 40px;
	padding: 0;

	list-style: none;
`
const FriendLItem = styled.li`
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;

	display: flex;
	align-items: center;

	gap: 20px;

	border: 1px solid black;
	border-radius: 7px;
`

const FriendOffline = styled.span`
	margin-left: 20px;
	width: 20px;
	height: 20px;

	background-color: red;
	border-radius: 50%;
`
const FriendOnline = styled(FriendOffline)`
	background-color: green;
`
const FriendName = styled.p`
	font-weight: 700;
	font-size: 20px;
`

export { FriendsUl, FriendLItem, FriendOnline, FriendOffline, FriendName }