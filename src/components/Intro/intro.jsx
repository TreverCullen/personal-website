import React from 'react';
import './intro.css';

import Terminal from '../Terminal/terminal';

class Column extends React.Component {
  render() {
    return (
      <div className="intro">
        <Terminal />
      </div>
    );
  }
}

export default Column;
