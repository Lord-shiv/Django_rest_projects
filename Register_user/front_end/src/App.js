import logo from './logo.svg';
import './App.css';
import Hello from './components/UserForm';
import UserList from './components/UserList';
import UserFormClass from './components/UserForms';

function App() {
  return (
    <div className="App">
      <h1>User Form</h1>
      <Hello />
      <UserFormClass />
    </div>
  );
}

export default App;
