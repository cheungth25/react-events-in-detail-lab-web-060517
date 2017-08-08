// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

  someShit = (event) => {
    let moreShit = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(moreShit)
  }

  render(){
    return(
      <button onClick={this.someShit} />
    )
  }
}
