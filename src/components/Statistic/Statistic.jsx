import './Statistic.css'
import PropTypes from "prop-types";


const Statistic = ({ title, stats }) => {
	return (<>
		<section className="statistics" >
			<h2 className="title">{title}</h2>

			<ul className="stat-list">
				{stats.map(stat => {
					return (
						<li key={stat.id} className="item-stat" style={{
							backgroundColor: getRandomColor(),
						}}>
							<span className="label">{stat.label}</span>
							<span className="percentage">{stat.percentage}%</span>
						</li>)
				})}
			</ul>
		</section >
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

