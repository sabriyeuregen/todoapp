import UserForm from "./components/User/UserForm";
import Create from "./components/Create/Create";
import Read from './components/Read/Read';
import Update from './components/Update/Update';

 const App = () => {
  return (
    <div className="App">
      <UserForm></UserForm>
      <Create></Create>
      <Update></Update>
      <Read></Read>
      
    </div>
  );
}

export default App;
