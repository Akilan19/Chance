import "./App.css";
import HorizontalScroll from "react-scroll-horizontal";
import SearchIcon from '@mui/icons-material/Search';
import Message from "./Component/Message";
import Topimg from "./Component/Topimg";
import { useState } from "react";



export default function App() {
  const child = { marginLeft: `18px` ,width: `6em` };
  const[searchTitle , setSearchTitle] = useState("");

  const Pmessage = [
    {
        image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Blow_Kiss_Emoji.png?8026536574188759287",
        name:"ability",
        title:"SweetPotato",
        msg:"Lets catch upover dinner at around 5pm?",
        time:"3:32pm",
        nmsg:"4",
    },
  
    {
        image:"https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558",
        name:"absence",
        title:"Angelina",
        msg:"Where have you been?",
        time:"3:32pm",
        nmsg:"4",
    },

    {
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png",
      name:"academy",
      title:"HungryDog",
      msg:"Nope",
      time:"3:32pm",
      nmsg:"4",
    },

    {
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Emojione_1F60C.svg/1024px-Emojione_1F60C.svg.png",
      name:"account",
      title:"HotPotato",
    msg:"Okay",
    time:"3:32pm",
    nmsg:"4",
  },
  ];

  const filterTitle = Pmessage.filter((na) => {
    return na.title.toLowerCase().includes(searchTitle.toLocaleLowerCase());
  });

  return (
    <div className="App">
    <h1 id="qq"><bold>New Connections</bold> <span>2</span></h1>
    <br></br>
      <HorizontalScroll className="hs">
      
        
          {Pmessage.map((it) => (
            <div style={child}>
            <Topimg key={it.name} image={it.image} name={it.name}/>
            </div>
          ))}
        
      </HorizontalScroll>
      
      <div className="parent">

      <div className="down">
        <h1 id="msg"><bold>Messages</bold><span>1</span></h1>
        <div className="search">
            <SearchIcon/>
            <input type="text" placeholder="Search" onChange={(event) => {
          setSearchTitle(event.target.value);
        }}/>
        </div>
      </div>

      <div className="msg">
      {filterTitle.map((item) => {
       return <Message im={item.image} ti={item.title} ms={item.msg} tim={item.time} nms={item.nmsg} key={item.name}/>
      })}
      </div>
      </div>

    </div>
  );
}
