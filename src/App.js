import React from 'react'
import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnages from './containers/ListePersonnages/ListePersonnages';
class App extends React.Component {
  state={
    refresh:false
  }

  handleRefresh=()=>{
    this.setState((oldState=>{
      return{
        refresh:!oldState.refresh 
      }
    }))
  }
  render() {
    return (
      <>
        <CreateurPersonnage handleRefresh={this.handleRefresh} />
        <ListePersonnages  refresh={this.state.refresh} />
      </>
    );
  }
}

export default App;
