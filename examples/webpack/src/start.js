import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

const root = document.createElement('div')
document.body.appendChild(root)

export default function start() {
  // First case : code in function
  // This does not work at all because App and HotApp are not registered
  // ---
  // const App = () => <div>Hello World!! 52</div>
  // const HotApp = hot(module)(App)
  // ReactDOM.render(<HotApp />, root)
  // ---
}

// Second case : code not in function
// This case is trickier because it work but the app is broken
// You can see that the App is duplicated, this is a true bug, this type
// of configuration should either not work at all or work but not break the
// application.
// ---
const App = () => <div>Hello World!! 55</div>
const HotApp = hot(module)(App)
ReactDOM.render(<HotApp />, root)
// ---
