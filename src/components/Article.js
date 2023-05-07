import { Component } from "react";
export default class Article extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}