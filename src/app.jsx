import React from 'react';
import Header from "./header/header";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {page: 'Profile'}
		this.clickHandler = this.clickHandler.bind(this)
	}

	clickHandler = (e) => {
		this.setState({page: e.target.textContent})
	}

	render() {
		switch (this.state.page) {
			case 'Profile':
				break
			case 'Map':
				break
			case 'Login':
				break
		}
		return (<>
				<Header onClick={(e) => this.clickHandler(e)}/>
				{this.state.page}
			</>
		);
	}


}

export default App;
