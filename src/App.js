import logo from './logo.svg';
import './App.css';


import Welcome from './welcome/Welcome';
import Home from './home/Home';
import Navbar from './welcome/Navbar';
import Login from './login/Login';
import SignUp from './signup/SignUp';
import Jobs from './jobs/Jobs';
import Individual from './profile/Individual';

function App() {
  return (
    <main className="App">
      <Welcome />
      <Login />
      {/* <Home /> */}
      <Jobs />
      <SignUp />
      {/* <Individual /> */}
    </main>
  );
}

export default App;
