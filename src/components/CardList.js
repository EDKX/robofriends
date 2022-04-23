import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
	      {
	      	robots.map((user, i) => {
				return (
					<Card 
						key={robots[i].id} //in order for the DOM to recognize the individual cards we use a key
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>
				);
			})
		}
		</div>
	);
}	

export default CardList;