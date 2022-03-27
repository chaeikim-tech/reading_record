import Header from './components/Header';
import Nav from './components/Nav';
import Detail from './components/Detail';

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ] 
  return (
    <div className="App">
      <Header title="Reading record" />
      <Nav topics={topics}  />
      <Detail title="Welcome" contents="Hello. Readers"/>
    </div>
  );
}

export default App;
