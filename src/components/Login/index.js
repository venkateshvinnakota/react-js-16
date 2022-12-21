import './index.css'

const Login = props => {
  const {buttonClick} = props
  return (
    <button type="button" className="button" onClick={buttonClick}>
      Login
    </button>
  )
}

export default Login
