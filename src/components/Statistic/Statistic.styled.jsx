import styled from 'styled-components'

const StatisticSection = styled.section`
	margin-top: 40px;

	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid black;
	border-radius: 7px;
`

const HeadOfSection = styled.h2`
	margin: 0;
	padding: 0;
	padding-bottom: 20px;
	padding-top: 20px;

	text-transform: uppercase;
	font-size: 25px;
	text-decoration-line: underline;
`

const StatList = styled.ul`
	width: 100%;

	margin: 0px;
	padding: 0;
	margin-bottom: auto;

	display: flex;
	justify-content: space-around;

	list-style: none;
`
const ItemOfStatList = styled.li`
	padding: 20px;

	display: flex;
	align-items: center;
	flex-direction: column;

	color: #fff;
`
const LabelOfStat = styled.span`
	font-size: 16px;
	font-weight: 400;
`

const PercentageOfStat = styled.span`
		font-weight: 700;
	font-size: 20px;
`

export { StatisticSection, HeadOfSection, StatList, ItemOfStatList, LabelOfStat, PercentageOfStat } 