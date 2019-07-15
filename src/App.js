import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Apicall from '../src/apiCall';
import HeaderGithub from './header';
import Github from './Github-Searcher';
import Auth0Lock from 'auth0-lock';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      idToken:'',
      profile:{}

     }
}

static defaultProps = {

  domain: 'democom.auth0.com',
  clientID: 'GT9p0WU3xgKD7pfB1KpjGnysOS7t5pNh',
}

//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  
  this.lock = new Auth0Lock(this.props.domain,this.props.clientID);

  this.lock.on('authenticated',(authResult) =>{

    console.log(authResult);

  })

}

showPanelLock(){

this.lock.show();
  
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <HeaderGithub link={this.showPanelLock.bind(this)}/>
          <Github/>
          </header>
      </div>
    );
  }
}

export default App;
