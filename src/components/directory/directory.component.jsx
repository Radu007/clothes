import React, { Component } from 'react'

import './directory.styles.scss'
import sections from './directory.data.js'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sections
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherProps }) => (
					<MenuItem key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default Directory