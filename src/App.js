import style from "./App.css";
import Person from "./Person/Person";
import { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { id: "adsf3", name: "Max", age: 26 },
      { id: "xvfh4", name: "Manu", age: 25 },
      { id: "fdsf5", name: "Victor", age: 26 },
      { id: "fdsf5", name: "favv", age: 26 },

    ],
    showPerson: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    console.log(person);

    person.name = event.target.value;

    const persons = [...this.state.persons];    
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  tooglePersonHandler = () => {
    const doesShow = !this.state.showPerson;
    this.setState({ showPerson: doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '4px',
      border: '1px solid green',
      borderRadius: '3px',
      fontSize: '18px',
      fontStyle: 'bold',
      cursor: 'pointer',
     
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.tooglePersonHandler}
        >Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;