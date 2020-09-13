import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg.svg' 

import './header.styles.scss'

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to='/' className='logo-container'>
			<Logo className="logo" />
		</Link>

		<div className="options">
			<Link to='/shop' className='option'>SHOP</Link>
			<Link to='/contact' className='option'>CONTACT</Link>

			{
				currentUser ? 
				(<div className='option' onClick={() => auth.signOut()}>SIGN Out</div>) :
				(<Link className='option' to='/signin'>SIGN IN</Link>)
			}
		</div>
	</div>
)

const mapStateToProps = (_state) => ({
	currentUser: _state.user.currentUser
})

export default connect(mapStateToProps)(Header)