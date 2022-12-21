import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isMode: false}

  onMode = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  onButtonClick = () => {
    const {isMode} = this.state

    return isMode ? <Login /> : <Logout />
  }

  onMessageShow = () => {
    const {isMode} = this.state

    return isMode ? 'Please Login' : 'Welcome User'
  }

  render() {
    const onMessage = this.onMessageShow()

    return (
      <div className="container">
        <div className="bg-container">
          <Message message={onMessage} />
          {this.onButtonClick()}
        </div>
      </div>
    )
  }
}

export default Home
