import React from 'react';

import NavigationBar from './NavigationBar';
import Index from './Index';
export class App extends React.Component {

  render() {
    return (
      <div {...this.props}>
        <NavigationBar />
        {this.props.children || <Index />}
      </div>
    );
  }
}
