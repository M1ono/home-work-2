import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";

function App() {
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', height: 400 }}>
      <Profile name="Вася Пупкин" registredAt={ new Date(2021, 5, 22) } />
      <ProfileClass name="Вася" registredAt={ new Date(2020, 6, 21) } />
    </div>
  );
}

export default App;
