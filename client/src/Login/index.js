// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions
import { helloWorldAction } from 'store/actions'

// Our components
import LayoutContainer from 'shared/LayoutComponent'
import Footer from 'shared/FooterComponent'

// Our styles
import './index.css'

class Login extends PureComponent {
  static propTypes = {
    hello: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    if (process.env.NODE_ENV !== 'production') {
      console.log(this.props.hello.get('world'))
    }

    return (
      <div>
        <LayoutContainer>
          <section className='loginSection'>
            <div className='row'>
              <div className='small-12 medium-8 large-6 large-offset-3 columns'>
                <h1> Login </h1>
                <div className='login'>
                  <form className='loginForm'>
                    <input
                      type='text'
                      className='input title'
                      input='text'
                      name='username'
                      placeholder='Username'
                      maxLength=''
                      // value=''
                      required
                      />
                    <input
                      className='input title'
                      type='password'
                      input='password'
                      name='password'
                      placeholder='password'
                      maxLength=''
                      // value=''
                      required
                      />
                    <button className='loginButton' type='submit'>Login</button>
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

const mapStateToProps = (state) => ({
  hello: state.get('hello')
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(helloWorldAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
