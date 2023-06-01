import Profile from './Profile';
import Statistic from './Statistic';
import FriendsList from './Friends';
import Transactions from './Transactions';

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
			<FriendsList friends={friends} />
			<Transactions transactions={transactions} />
		</>

	);
};
