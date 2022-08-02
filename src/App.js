import logo from './logo.svg';
import './App.css';
import FunctionCounter from './components/FunctionCounter';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container-fluid mt-5 py-5'>
          <h1>Counter</h1>
          <div className='row' style={{ display: 'flex' }}>
            <FunctionCounter />
            <ClassCounter />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
