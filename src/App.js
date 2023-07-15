import "./App.css";
import Activity from "./container/Activity/Activity";
import Assets from "./container/Assets/Assets";
import Profile from "./container/Profile/Profile";
import Sidebar from "./container/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mid-app">
        <p>{"Dashboard > Home"}</p>
        <div className="mid">
          <Assets />
          <Activity />
        </div>
      </div>

      <div className="profile-app">
        <Profile />
      </div>
    </div>
  );
}

export default App;
