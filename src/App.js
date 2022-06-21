import './assets/style.css';
import Header from './components/header.js'
import List from './components/list.js'
import ListView from './components/listView.js'



function App() {
  const todoList = [
    {title : 'first', sq : '0', date : '20220602'}
  ]

  return (
    <div className="App">
      <Header></Header>
      <List list={todoList}></List>
      <ListView></ListView>
    </div>
  );
}

export default App;
