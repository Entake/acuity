// Libraries
import React, { PureComponent } from 'react'

// Our components
import FourOhFour from 'pages/shared/FourOhFourComponent'

// Our styles
import './index.css'

class fourOhFour extends PureComponent {
  static propTypes = {

  }

  render () {
    return (
      <div>
        <FourOhFour />
      </div>
    )
  }
}

export default fourOhFour
