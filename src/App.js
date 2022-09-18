import UserForm from "./components/User/UserForm";
import Create from "./components/Create/Create";
import Read from './components/Read/Read';
import Update from './components/Update/Update';
import useLocalStorage from 'use-local-storage'
import  "./App.css";

 const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

 const switchTheme = () => {
   const newTheme= theme=== "light" ?  "dark" : "light";
   setTheme(newTheme)

 }



  return (
    <div className="App" data-theme={theme}>
      <button onClick={switchTheme}>
       Select To {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <UserForm></UserForm>
      <Create></Create>
      <Update></Update>
      <Read></Read>
      
    </div>
  );
}

export default App;
