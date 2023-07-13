import './App.css';
import Assets from './container/Assets/Assets';
import Sidebar from './container/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mid-app">
        <p>{"Dashboar > Home"}</p>
        <Assets />
      </div>
    </div>
  );
}

export default App;
