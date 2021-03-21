import './App.css';
import Hello from './components/UserForm';
import UserFormClass from './components/UserForms';

function App() {
  return (
    <div className="App">
      <h1>User Form</h1>
      <Hello name="shivam" lastname="chouhan" />
      <UserFormClass email="shivam@chouhan.com" />
    </div>
  );
}

export default App;
