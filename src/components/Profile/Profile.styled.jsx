import styled from "styled-components";

const WrapperCard = styled.div`
	width: 300px;

	margin-left: auto;
	margin-right: auto;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	overflow: hidden;

	border: 1px solid black;
	border-radius: 10px;
`

const DescriptionOfCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin-bottom: 20px;
`

const ImgUser = styled.img`
	width: 250px;
	height: 250px;

	display: block;

	border-radius: 50%;
	border: 1px solid black;
`
const UserData = styled.p`
	margin-bottom: 2px;
	color: gray;
	`
const UserName = styled(UserData)`
	font-size: 25px;
	font-weight: 800;
	color:black;
`

const StatOfUser = styled.ul`
	width: 113%;

	margin: 0;
	margin-bottom: auto;
	padding: 0;

	display: flex;
	justify-content: space-around;

	list-style: none;
	background-color: antiquewhite;
	border-top: 1px solid black;

`
const ItemOfStat = styled.li`
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 20px;
	padding-right: 20px;
`
const MoreStylishItemOfStat = styled(ItemOfStat)`
	border-left:1px solid black ;
	border-right:1px solid black  ;
	padding-left: 30px;
	padding-right: 30px;
`

const LabelOfStat = styled.span`
	margin-bottom: 10px;

	display: flex;
	justify-content: center;
	
	color: gray;
`
const QuantityOfStat = styled(LabelOfStat)`
	font-size: 20px;
	font-weight: 700;
	
	color:black;
`


export { WrapperCard, DescriptionOfCard, ImgUser, UserData, UserName, StatOfUser, ItemOfStat, MoreStylishItemOfStat, LabelOfStat, QuantityOfStat }