import Header from './components/Header';
import Nav from './components/Nav';
import Detail from './components/Detail';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null); 
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ] 
  let content = null;
  if(mode === "WELCOME") {
    content = <Detail title="WELCOME" body="Hello. Readers"/>
  } else if(mode === "READ"){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Detail title={title} body={body} />
  }
  return (
    <div className="App" >
      <Header title="Reading record" onChangeMode={()=>{ setMode('WELCOME') }} />
      <Nav topics={topics} onChangeMode={(_id)=>{ setMode('READ'); setId(_id); }} />
      {content}
    </div>
    
  );
}

export default App;
