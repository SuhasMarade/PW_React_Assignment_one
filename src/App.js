import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";


function App() {
  return (
     <>
       <Person name = "Amit" age = "23"/>
       <Button text = "hit me" onClick = {()=>  console.log("You hit me hard")}/>
       <Header title = "React Assignment"/>
       <List items = {['red', 'green', 'blue', 'indigo']}/>
    </>

  );
}

export default App;
