import './App.css';
import Hello from './components/UserForm';
import UserFormClass from './components/UserForms';
import Name from './components/Name';

function App() {
  function clicked() {
    alert("class button clicked.");
  }
  return (
    <div className="App">
      <Name />
    </div>
  );
}

export default App;
