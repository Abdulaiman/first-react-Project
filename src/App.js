import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
const App = () => {
  const [searchField, setSearchString] = useState("");
  const [monsters, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonster(data));
  }, []);
  useEffect(() => {
    const newFilteredMonster = monsters.filter((el) => {
      return el.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        s
        className="monster-Search-Box"
      />
      {/* {filteredMonster.map((el) => (
            <div key={el.id}>
              <h1>{el.name}</h1>
            </div>
          ))} */}
      <CardList monsters={filteredMonster} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) =>
//         this.setState(
//           () => {
//             return { monsters: data };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   render() {
//     const filteredMonster = this.state.monsters.filter((el) => {
//       return el.name.toLowerCase().includes(this.state.searchString);
//     });
//     const onSearchChange = (event) => {
//       console.log(event.target.value);
//       const searchString = event.target.value.toLowerCase();

//       console.log(filteredMonster);
//       this.setState(() => {
//         return { searchString };
//       });
//       // console.log(filteredMonster);
//       console.log(this.state);
//     };
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//           className="monster-Search-Box"
//         />
//         {/* {filteredMonster.map((el) => (
//           <div key={el.id}>
//             <h1>{el.name}</h1>
//           </div>
//         ))} */}
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
