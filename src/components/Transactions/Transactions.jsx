import './Transactions.css';
import PropTypes from "prop-types";

const Transactions = ({ transactions }) => {
	return (
		<>
			<table className="transaction-history">
				<thead>
					<tr className='table-row'>
						<th className='table-head'>Type</th>
						<th className='table-head'>Amount</th>
						<th className='table-head'>Currency</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map(transaction => {
						return (
							<tr className='table-row' key={transaction.id}>
								<td className='table-data'>{transaction.type}</td>
								<td className='table-data'>{transaction.amount}</td>
								<td className='table-data'>{transaction.currency}</td>
							</tr>)
					})}

				</tbody>
			</table>
		</>
	)
}

Transactions.propTypes = {
	transactions: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	}))
}


export default Transactions