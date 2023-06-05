// import './Statistic.css'
import PropTypes from "prop-types";
import { StatisticSection, HeadOfSection, StatList, ItemOfStatList, LabelOfStat, PercentageOfStat } from './Statistic.styled'


const Statistic = ({ title, stats }) => {
	return (<>
		<StatisticSection>
			<HeadOfSection>{title}</HeadOfSection>

			<StatList>
				{stats.map(stat => {
					return (
						<ItemOfStatList key={stat.id} className="item-stat" style={{
							backgroundColor: getRandomColor(),
						}}>
							<LabelOfStat >{stat.label}</LabelOfStat>
							<PercentageOfStat>{stat.percentage}%</PercentageOfStat>
						</ItemOfStatList>)
				})}
			</StatList>
		</StatisticSection >
	</>)
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

Statistic.propType = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	})
}

export default Statistic

