import React, {Component} from 'react'
import { connect } from 'react-redux'
import { signIn} from '../../store/actions/authAction'

class SignIn extends Component {
    state = {
        email:'',
        password: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render () {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-filed">
                        <button className="btn pink lighten-1 z-depth-0">Login</button> 
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signIn: (creds) => dispatch( signIn(creds))
    }
}
export default connect(null, mapDispatchToProps)(SignIn)