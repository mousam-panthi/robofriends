import Reacct from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '435px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;