import { Component } from "react";
export default class Control extends Component{
    render(){
        let content = null;
        if(this.props.select_id !== null){
            content = <div>
            <li><a href="/update" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>
            <li><input  onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
            }.bind(this)} type="button" value="delete" /></li>
            </div>
            
        }
        return(
            <div>
                <ul>
                    <li><a href="/create" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>create</a></li>
                    {content}
                </ul>
            </div>
        );
    }
}


