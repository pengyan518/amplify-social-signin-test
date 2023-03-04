import { Auth } from 'aws-amplify'

function InnerApp() {
  return (
    <div>
      <h1>Hello</h1>
      <h3>Welcome to App!</h3>
      <button className="button" onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default InnerApp
