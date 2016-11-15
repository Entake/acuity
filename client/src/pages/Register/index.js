// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions
import { registerAction } from 'store/actions'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import Footer from 'pages/shared/FooterComponent'
import { registerErrorToMessage } from '../../util'

// Our styles
import './index.css'

class Register extends PureComponent {
  constructor () {
    super()

    // Refs
    this.form
    this.usernameInput
    this.passwordInput
    this.passwordInputRepeat

    // Validation
    this.state = {
      usernameInvalid: false,
      passwordInvalid: false,
      passwordRepeatInvalid: false
    }
  }

  static propTypes = {
    registerUser: PropTypes.func.isRequired,
    redirectToLogin: PropTypes.bool,
    error: PropTypes.object,
    token: PropTypes.string
  }

  handleClick = e => {
    e.preventDefault()

    // Check validity
    if (!this.form.checkValidity()) {
      this.handleEmptyFields()
      return
    }

    // Set all input fields to valid
    this.setState({
      usernameInvalid: false,
      passwordInvalid: false,
      passwordRepeatInvalid: false
    })

    // Check that passwords match
    if (this.passwordInput.value !== this.passwordInputRepeat.value) {
      this.passwordInput.value !== this.passwordInputRepeat.value
      ? this.setState({passwordInvalid: true, passwordRepeatInvalid: true})
      : this.setState({passwordInvalid: false, passwordRepeatInvalid: false})
      return
    }

    this.props.registerUser({
      login: this.usernameInput.value,
      password: this.passwordInput.value,
      passwordRepeat: this.passwordInputRepeat.value
    })
  }

  handleEmptyFields = () => {
    !this.usernameInput.value ? this.setState({usernameInvalid: true}) : this.setState({usernameInvalid: false})
    !this.passwordInput.value ? this.setState({passwordInvalid: true}) : this.setState({passwordInvalid: false})
    !this.passwordInputRepeat.value ? this.setState({passwordRepeatInvalid: true}) : this.setState({passwordRepeatInvalid: false})
  }

  componentDidUpdate = () => {
    if (this.props.redirectToLogin) {
      // TODO: Find a less hacky way to do this
      setImmediate(this.context.router.push({
        pathname: '/login',
        state: { fromRegistration: true }
      }))
    }
  }

  componentDidMount = () => {
    if (this.props.token) {
      setImmediate(this.context.router.push('/'))
    }
  }

  render () {
    return (
      <div>
        <LayoutContainer>
          <section className='registerSection'>
            <div className='row'>
              <div className='small-12 medium-8 large-6 large-offset-3 columns'>
                <h1> Register </h1>

                {this.props.error ? (
                  <div className='alert alert-danger' role='alert'>{registerErrorToMessage(this.props.error)}</div>
                ) : ''}

                <div className='username'>
                  <form className='registerForm' ref={f => { this.form = f }}>
                    <input
                      className={this.state.usernameInvalid ? 'input title invalid' : 'input title'}
                      type='text'
                      name='username'
                      placeholder='Username'
                      ref={i => { this.usernameInput = i }}
                      required
                    />
                    <input
                      className={this.state.passwordInvalid ? 'input title invalid' : 'input title'}
                      type='password'
                      placeholder='Password'
                      ref={i => { this.passwordInput = i }}
                      required
                    />
                    <input
                      className={this.state.passwordRepeatInvalid ? 'input title invalid' : 'input title'}
                      type='password'
                      placeholder='Repeat Password'
                      ref={i => { this.passwordInputRepeat = i }}
                      required
                    />
                    <button className='loginButton' type='submit' onClick={this.handleClick}>Register</button>
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

Register.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  redirectToLogin: state.getIn(['auth', 'redirectToLogin']),
  error: state.getIn(['auth', 'error']),
  token: state.getIn(['auth', 'token'])
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: params => dispatch(registerAction(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
