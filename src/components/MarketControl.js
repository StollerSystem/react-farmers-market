import React from 'react';
import MarketList from './MarketList';

class MarketControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      marketVisibleOnPage: "Monday"
    };
  }

  render(){
    // let currentVisibleMonth = null;
    
    return (
      <React.Fragment>
        <MarketList />
      </React.Fragment>
    )
  }
}

export default MarketControl;