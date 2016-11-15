// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions
import { loginAction, redirectedToLoginAction } from 'store/actions'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import Footer from 'pages/shared/FooterComponent'
import { loginErrorToMessage } from '../../util'

// Our styles
import './index.css'

class Login extends PureComponent {
  constructor () {
    super()

    // Refs
    this.form
    this.usernameInput
    this.passwordInput

    // Validation
    this.state = {
      usernameInvalid: false,
      passwordInvalid: false
    }
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    hasBeenRedirected: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    error: PropTypes.string,
    token: PropTypes.string
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    // TODO: See render function
    if (this.props.location.state) {
      if (this.props.location.state.fromRegistration) {
        this.props.hasBeenRedirected()
      }
    }

    if (this.props.token) {
      setImmediate(this.context.router.push('/'))
    }
  }

  componentDidUpdate = () => {
    if (this.props.token) {
      setImmediate(this.context.router.push('/'))
    }
  }

  handleClick = e => {
    e.preventDefault()

    // Check validity
    if (!this.form.checkValidity()) {
      this.errorHandling()
      return
    }

    // Set all input fields to valid
    this.setState({
      usernameInvalid: false,
      passwordInvalid: false
    })

    this.props.loginUser({
      login: this.usernameInput.value,
      password: this.passwordInput.value
    })
  }

  errorHandling = () => {
    !this.usernameInput.value ? this.setState({usernameInvalid: true}) : this.setState({usernameInvalid: false})
    !this.passwordInput.value ? this.setState({passwordInvalid: true}) : this.setState({passwordInvalid: false})
  }

  render () {
    let fromRegister = <p />
    // TODO: Make this prettier
    // (can't do && since it would produce a typeerror if state is undefined)
    if (this.props.location.state) {
      if (this.props.location.state.fromRegistration) {
        fromRegister = <p>You can now login!</p>
      }
    }

    return (
      <div>
        <LayoutContainer>
          <section className='loginSection'>
            <div className='row'>
              <div className='small-12 medium-8 large-6 large-offset-3 columns'>
                { fromRegister }
                <h1> Login </h1>

                {this.props.error ? (
                  <div className='alert alert-danger' role='alert'>{loginErrorToMessage(this.props.error)}</div>
                ) : ''}

                <div className='login'>
                  <form className='loginForm' ref={f => { this.form = f }}>
                    <input
                      type='text'
                      className={this.state.passwordInvalid ? 'input title invalid' : 'input title'}
                      name='username'
                      placeholder='Username'
                      ref={i => { this.usernameInput = i }}
                      required
                    />
                    <input
                      type='password'
                      className={this.state.passwordInvalid ? 'input title invalid' : 'input title'}
                      name='password'
                      placeholder='password'
                      ref={i => { this.passwordInput = i }}
                      required
                    />
                    <button className='loginButton' type='submit' onClick={this.handleClick}>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.getIn(['auth', 'token']),
  error: state.getIn(['auth', 'error'])
})

const mapDispatchToProps = (dispatch) => ({
  hasBeenRedirected: () => dispatch(redirectedToLoginAction()),
  loginUser: params => dispatch(loginAction(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
