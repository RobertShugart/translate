import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
	render() {
		return (
			<ColorContext.Consumer>
				{() => (
					<button className="ui button primary">
						<LanguageContext.Consumer>
							{(value) => (value === 'english' ? 'Submit' : 'Voorleggen')}
						</LanguageContext.Consumer>
					</button>
				)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
