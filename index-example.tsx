import React from 'react';
import ReactDOM from 'react-dom';

// typical structure of react typescript
interface AppProps {
  color?: string; // optional property
}

// interface AppState {
//   counter: number;
// }

// const App = (props: AppProps): JSX.Element => {
//   //dont rely on type inference for return annotation
//   return <div>{props.color}</div>;
// };

class App extends React.Component<AppProps> {
  state = { counter: 0 }; // redefining the meaning of state in the component!

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
