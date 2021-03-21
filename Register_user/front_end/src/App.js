import logo from './logo.svg';
import './App.css';
import Hello from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>User Form</h1>
      <Hello />
      <UserList />
    </div>
  );
}

export default App;
