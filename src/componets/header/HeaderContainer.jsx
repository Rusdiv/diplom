import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData,logout } from '../../Redux/auth-reducer'


class HeaderContainer extends Component {
  render() {
    return (
        <Header {...this.props}/>
    )
  }
}

const mapStateToPRops = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email
})


export default connect(mapStateToPRops, {getAuthUserData,logout})(HeaderContainer)
