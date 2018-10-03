import React, { Component } from 'react';

class EventTitle extends Component {
  state = {
    events: [
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''}
    ]
  }
  render() {
    return(
      <div>
      {this.props.eventDataFromParent}
      </div>
    );
  }
}

export default EventTitle