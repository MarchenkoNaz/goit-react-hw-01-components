// import './Transactions.css';
import PropTypes from "prop-types";
import { Table, TableHeading, TableData } from "./Transactions.styled";

const Transactions = ({ props }) => {
	return (
		<>
			<Table>
				<thead>
					<tr className='table-row'>
						<TableHeading>Type</TableHeading>
						<TableHeading>Amount</TableHeading>
						<TableHeading>Currency</TableHeading>
					</tr>
				</thead>

				<tbody>
					{props.map(transaction => {
						return (
							<tr className='table-row' key={transaction.id}>
								<TableData>{transaction.type}</TableData>
								<TableData>{transaction.amount}</TableData>
								<TableData>{transaction.currency}</TableData>
							</tr>)
					})}

				</tbody>
			</Table>
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