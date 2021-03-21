import './App.css';
import Hello from './components/UserForm';
import UserFormClass from './components/UserForms';

function App() {
  function clicked() {
    alert("class button clicked.");
  }
  return (
    <div className="App">
      <h1>User Form</h1>
      <Hello name="shivam" lastname="chouhan" />
      <UserFormClass email="shivam@chouhan.com" myclick={clicked} />
    </div>
  );
}

export default App;
