import Profile from 'components/Profile';
import Statistic from 'components/Statistic';
import FriendsList from 'components/Friends';
import Transactions from 'components/Transactions';

import './App.css';

import user from '../data/user.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';


export const App = () => {
	return (
		<>
			<div className="hello"
				style={{
					height: '20%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 40,
					color: '#010101'
				}}
			>
				React homework 1
			</div>
			<Profile {...user} />
			<Statistic title="Statistic"
				stats={data} />
			<FriendsList props={friends} />
			<Transactions props={transactions} />
		</>

	);
};
