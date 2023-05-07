import { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Control from "./components/control";
import Create from "./components/Create";
import Update from "./components/Update";
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            welcome:{title:'welcome', desc:'hello react'},
            nextId:4,
            id:null,
            mode:'welcome',
            topics:[
                {id:1, title:'html', desc:'html is ...'},
                {id:2, title:'css', desc:'css is ...'},
                {id:3, title:'node', desc:'node is ...'}
            ]
        }
    }
  render(){
    let title,desc, content =null;
    if(this.state.mode === 'welcome'){
        title=this.state.welcome.title;
        desc=this.state.welcome.desc;
        content = <Article title={title} desc={desc} />
    }else if(this.state.mode === 'read'){
        for(let i=0;i<this.state.topics.length;i++){
            if(this.state.topics[i].id === this.state.id){
                title = this.state.topics[i].title;
                desc = this.state.topics[i].desc;
                break;
            }
        }
        content = <Article title={title} desc={desc} />
    } else if(this.state.mode === 'create'){
        content = <Create onCreate={function(title,desc){
            const newNextId = this.state.nextId + 1;
            // const newTopics = Array.from(this.state.topics);
            // const newTopic = {id:this.state.nextId, title:title, desc:desc};
            const newTopics = [...this.state.topics];
            const newTopic = {id:this.state.nextId, title:title, desc:desc}

            newTopics.push(newTopic);
            this.setState({
                topics:newTopics,
                id:this.state.nextId,
                nextId:newNextId,
                mode:'read'

            });
        }.bind(this)} />
    } else if(this.state.mode === 'update'){
        for(let i=0;i<this.state.topics.length;i++){
            if(this.state.topics[i].id === this.state.id){
                title = this.state.topics[i].title;
                desc = this.state.topics[i].desc;
                break;
            }
        }
        content = <Update title={title} desc={desc} onUpdate={function(title,desc){
            // const newTopics = Array.from(this.state.topics);
            // const newTopic = {id:this.state.nextId, title:title, desc:desc};
            // const newNextId = this.state.nextId + 1;
            const newTopics = [...this.state.topics];
            const newTopic = {id:this.state.id, title:title, desc:desc}
            for(let i=0;i<newTopics.length;i++){
                if(newTopics[i].id === this.state.id){
                    newTopics[i] = newTopic;
                    break;
                }
            }
            this.setState({
                topics:newTopics,
                // id:this.state.id,
                // nextId:newNextId,
                mode:'read'

            });
        }.bind(this)} />
    } else if(this.state.mode === 'delete'){
        const newTopics = [];
        for(let i=0;i<this.state.topics.length;i++){
            if(this.state.topics[i].id !== this.state.id){
                newTopics.push(this.state.topics[i]);
            }
        }
        this.setState({
            topics:newTopics,
            mode:'welcome'
        })
    }
    return(
      <div>
        <Header title="WEB" onChangeMode={function(){
            this.setState({
                mode:'welcome',
                id:null
            })
        }.bind(this)} />
        <Nav topics={this.state.topics} onChangeMode={function(id){
            this.setState({
                mode:'read',
                id:id
            })
        }.bind(this)}/>
        <Control 
        select_id={this.state.id}
        onChangeMode={function(mode){
            this.setState({
                mode:mode
            })
        }.bind(this)}
        />
        {/* <Control id = {this.state.id}         
        onChangeMode={function(){
            this.setState({
                mode:'create'
            })
        }.bind(this)}/> */}
        
        {content}
      </div>
    );
  }
}