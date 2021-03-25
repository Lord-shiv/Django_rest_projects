import './App.css';
import React, { useState, useEffect } from 'react';
// import SideMenu from './components/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
// import SchoolIcon from '@material-ui/icons/School';

import { Link } from 'react-router-dom';


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


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchData() {
    fetch('http://127.0.0.1:8000/users/')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  deleteData(id) {
    fetch('http://127.0.0.1:8000/employee/' + id + '/', {
      method: 'DELETE',
      body: JSON.stringify(this.state),
    })
      .then(response => response)
      .then((data) => {
        if (data) {
          this.fetchData();
        }
      });
  }

  render() {
    const { classes } = this.props;
    const empData = this.state.data;
    const rows = empData.map((emp) =>
      <tr key={emp.id}>
        <td>{emp.first_name} {emp.last_name}</td>
        <td>{emp.email}</td>
        <td>{emp.phone}</td>
        <td>{emp.salary}</td>
        <td>
          <Link to={'update/' + emp.id} className="btn btn-info mr-2">Update</Link>
          <button onClick={() => this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <SideMenu /> */}
          <div className="table">
            <Header />
            <PageHeader
              title="Users Table"
            // subTitle="i am a subtitle"
            // icon={<SchoolIcon fontSize="large" />}
            />
          </div>
          <CssBaseline />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;


//   ES7         React/Redux/GraphQL/React-Native snippets
//   rce         for class components 
//   rfce        for functional components 
//   rconst      for constructor
