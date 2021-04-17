import './App.css';
import React, { useState, useEffect } from 'react';
// import SideMenu from './components/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider, Badge, IconButton } from '@material-ui/core';
import Header from './components/Header';
// import PageHeader from './components/PageHeader';
// import SchoolIcon from '@material-ui/icons/School';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';



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
        console.log(data);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  editBtn(article) {
    this.editBtn(article)
  }

  deleteData(id) {
    fetch('http://127.0.0.1:8000/users/' + id + '/', {
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
    const rows = empData.map((emp, index) =>
      <tr key={'mykey' + index}>
        <td>{emp.id}</td>
        <td><img className="Uimg" src={`http://127.0.0.1:8000${emp.profile_pic}`} alt="img"></img></td>
        <td>{emp.first_name} {emp.last_name}</td>
        <td>{emp.email}</td>
        <td>{emp.gender}</td>
        <td>{emp.status}</td>
        <td>{emp.phone}</td>
        <td>{emp.salary}</td>
        <td className="Inlinerow">
          <IconButton>
            <BorderColorIcon fontSize="small" onClick={() => this.editBtn(empData)} />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>

          {/* <Link to={'update/' + emp.id} className="btn btn-info mr-2">Update</Link> */}
          {/* <button onClick={() => this.deleteData(emp.id)} className="btn btn-danger">Delete</button> */}
        </td>
      </tr >
    );
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <SideMenu /> */}
          <div className="table">
            <Header />
            {/* <PageHeader
              title="Users Table"
            subTitle="i am a subtitle"
            icon={<SchoolIcon fontSize="large" />}
            /> */}
          </div>
          <CssBaseline />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>User</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Profile</th>
                <th>Contact</th>
                <th>Salary</th>
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
