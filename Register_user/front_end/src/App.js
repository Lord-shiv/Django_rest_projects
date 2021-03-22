import './App.css';
import Hello from './components/UserForm';
import UserFormClass from './components/UserForms';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';

function App() {
  function clicked() {
    alert("class button clicked.");
  }
  return (
    <div className="App">
      <Name />
      <Example names={['python', 'Java', 'javascript',]} />
      <Example2 names={['Rython', 'Bawa', 'Bawascript', 'django',]} />
      <Form />
    </div>
  );
}

export default App;


//   ES7         React/Redux/GraphQL/React-Native snippets
//   rce         for class components 
//   rfce        for functional components 
//   rconst      for constructor