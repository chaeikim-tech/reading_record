import Header from './components/Header';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Create from './components/Create';
import Update from './components/Update';
import { useState } from 'react';


function App() {
  const createClick = (event) => {
    event.preventDefault();
    setMode("CREATE");
  };
  const onCreate = (title, body) =>{
      const newTopic = {id:nextId, title, body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
  };
  const onUpdate = (title, body) => {
    console.log(title,body);
    const newTopics = [...topics];
    const updatedTopic = {id, title, body}
    for(let i=0; i < newTopics.length; i++){
      if(newTopics[i].id === id){
        newTopics[i] = updatedTopic;
        break;
      }
    }
    setTopics(newTopics);
    setMode("READ");
  };
const onDelete = () =>{
  const newTopics = [];
  for(let i=0; i<topics.length; i++){
    if(topics[i].id !== id){
      newTopics.push(topics[i]);
    }
  }
  setTopics(newTopics);
  setMode("WELCOME");
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
  let contextControl = null;
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
    contextControl = 
      <>
        <li><a href={'/update/'+id} onClick={event=>{
        event.preventDefault();
        setMode('UPDATE');
        }}>Update</a></li>
        <li>
          <input type="button" value="Delete" onClick={onDelete} />
        </li>
      </>
  } else if(mode === "CREATE") {
    content = <Create onCreate={onCreate}/>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={onUpdate} />
  }
  return (
    <div className="App" >
      <Header title="Reading record" onChangeMode={()=>{ setMode('WELCOME') }} />
      <Nav topics={topics} onChangeMode={(_id)=>{ setMode('READ'); setId(_id); console.log(_id); }} />
      {content}
      <ul>
        <li><a href="/create" onClick={createClick}>Create</a></li>
        {contextControl}
      </ul>
    </div>
    
  );
}

export default App;
