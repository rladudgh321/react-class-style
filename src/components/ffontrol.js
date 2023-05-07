import { Component } from "react";
export default class Control extends Component{
    render(){
        let context = null;
        if(this.props.id !== null){
            context = <div><li><a href="/update" onClick={function(e){
                e.preventDefault();
                this.setState({
                    mode:'update'
                })
            }.bind(this)}>Update</a></li>
            <li><input type="button" value="Delete"></input></li></div>
        } else {
            context= null;
        }
        return(
            <div>
                <ul>
                    <li><a href="/create" onClick={function(e){
                        e.preventDefault();
                        this.setState({
                            mode:'create'
                        })
                    }.bind(this)}>Create</a></li>
                    {context}
                </ul>
            </div>
        );
    }
}


