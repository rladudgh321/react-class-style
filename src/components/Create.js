import { Component } from "react";
export default class Create extends Component{
    render(){
        return(
            <div>
                <h2>Create</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onCreate(title, desc);
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title" /></p>
                    <p><textarea name="desc" placeholder="desc" /></p>
                    <p><input type="submit" value="create" /></p>
                </form>
            </div>
        );
    }
}