import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Gorilla MLP</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))