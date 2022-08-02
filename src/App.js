import logo from './logo.svg';
import './App.css';
import FunctionCounter from './components/FunctionCounter';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <div style={{ display: 'flex' }}>
          <FunctionCounter />
          <ClassCounter />
        </div>
      </header>
    </div>
  );
}

export default App;
