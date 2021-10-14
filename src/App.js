import React from 'react';

import './style.css';

import CardList from './components/CardList';

import SearchBox from './components/SearchBox';



class App extends React.Component {

  constructor() {

    super();



    this.state = {

      users: [],

      searchBoxTerm: '',

    };

  }



  // User defined functions in React classes should be arrow functions -> There's no logic to this, just remember it

  onSearchChange = (event) => {

    this.setState({ searchBoxTerm: event.target.value });

  };



  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then((response) => response.json())

      .then((users) => {

        this.setState({ users: users });

      });

  }



  render() {

    const filteredUsers = this.state.users.filter((users) => {

      return users.name

        .toLowerCase()

        .includes(this.state.searchBoxTerm.toLowerCase());

    });



    if (this.state.users.length === 0) {

      return <h1>Loading...</h1>;

    } else {

      return (

        <div className="tc">

          <h1 className="pageTitle">PixelCorp Directory</h1>

          <SearchBox searchChange={this.onSearchChange} />

          <CardList users={filteredUsers} />

        </div>

      );

    }

  }

}



export default App;

