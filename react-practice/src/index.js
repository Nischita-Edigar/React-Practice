//import moduleNameReactDOM from 'react-dom'
const ReactDOM = require('react-dom')
const { default: App } = require('./App')

//ReactDOM.render("Hello",document.getElementById("root"))
ReactDOM.render(<App></App>, document.getElementById('root'))
