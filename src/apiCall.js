import React from 'react';
import axios from 'axios';

class Apicall extends React.Component{

//https://www.reddit.com/r/space.json
//https://randomuser.me/api
    
    componentWillMount() {
        
        this.getReddit();

    }
    getReddit(){

        //axios.get(`https://randomuser.me/${this.state.sub}`)
        axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
        .then(res => {

            let posts = res.data.data.children.map(obj => obj.data);
            this.setState({posts});

        })
        .catch(function(err){

            console.log(err);

        })
        

    }


constructor(props){

    super(props);

    this.state = {
        posts:[],
        subr:'api'

    }
    this.getReddit = this.getReddit.bind(this);

}

render(){

    return(

        <div>

        <h1>Api Calls from Reddit and SubReddit is {`r/${this.state.subr}`}</h1>

        <ul>
        {
            
            this.state.posts.map(post =>
            
        <li key={post.id}>{post.title}</li> 
          
        )}
        </ul>

        
        </div>


    )
}
}

export default Apicall;