import Header from './components/Header';

import './App.css';

function App() {
  const element = {principal:"red"}
  const userNames = ["Zada","Jas","Mika","Merrin","Jose","Anarbek"]
  return (
    <div className="App">
      <header className="App-header">
        {
          userNames.map(user=><Header userName = {user} greeting="Good bye" tacos="beans" color={element}/>)
        }
      </header>
    </div>
  );
}

export default App;
