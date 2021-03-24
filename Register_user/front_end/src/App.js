import './App.css';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import SideMenu from './components/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import SchoolIcon from '@material-ui/icons/School';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fe2712',
      light: '#3c44b126'
    },
    secondary: {
      main: '#009900',
      light: '#f8324526'
    },
    background: {
      default: '#f8f8ff'
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/home/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(resp => setUsers(resp))
      .catch(error => console.log(error))
  }, [])
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <PageHeader
            title="OHO AHA OOO"
            subTitle="i am subtitle"
            icon={<SchoolIcon fontSize="large" />}
          />
        </div>
        <CssBaseline />
        <h3>User List</h3>
        <UserList users={users} />
      </div>
    </ThemeProvider>
  );
}

export default App;


//   ES7         React/Redux/GraphQL/React-Native snippets
//   rce         for class components 
//   rfce        for functional components 
//   rconst      for constructor