import Header from './components/Header';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Create from './components/Create';
import { useState } from 'react';

function App() {
  const submitClick = (event) => {
    event.preventDefault();
    setMode("CREATE");
  };
  const onCreate = (_title, _body) =>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null); 
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'우아하고 호쾌한 여자축구', body:`지은이: 김혼비`},
    {id:2, title:'더 셜리 클럽', body:'지은이: 박서련'},
    {id:3, title:'쓸모없는 것들이 우리를 구할 거야', body:'지은이: 김준'}
  ]);
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
  } else if(mode === "CREATE") {
    content = <Create onCreate={onCreate}/>
  }
  return (
    <div className="App" >
      <Header title="Reading record" onChangeMode={()=>{ setMode('WELCOME') }} />
      <Nav topics={topics} onChangeMode={(_id)=>{ setMode('READ'); setId(_id); console.log(_id); }} />
      {content}
      <a href="/create" onClick={submitClick}>Create</a>
    </div>
    
  );
}

export default App;
