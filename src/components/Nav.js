import { Component } from "react";
export default class Nav extends Component{
    render(){
        const list = [];
        for(let i=0;i<this.props.topics.length;i++){
            const t =this.props.topics[i];
            list.push(<li key={t.id}><a href={'/read/'+ t.id}
            onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode(t.id);
            }.bind(this)}
            >{t.title}</a></li>);
        }
        return(
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        );
    }
}