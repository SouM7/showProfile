
import {Component} from 'react'
import Pic from './images/user.png'

class profile extends Component {

    state = {

        Person : {

            fullName : "Bouhaouche Soumia",

            imgSrc : Pic,

            profession : "Web Dev",

            bio:"HELLO WORLD !"

          },

        show : false,

        // to show the time since 

        counter : 0
    };

incrementCounter = () => {

    const { counter } = this.state;
    this.setState({ counter : counter+1 });

};

componentDidMount (){ 

    setInterval(this.incrementCounter, 1000)
}

handleEvent=()=>{
    this.setState({show: !this.state.show})
}



render() {
    const img = {width:'100px', height:'100px'} 

    const container ={display:'flex', gap:'10px',alignItems:'center',
     backgroundColor:'pink',width:'30vw',height:'35vh',borderRadius:'50px',margin:'100px 200px 0 500px',padding:'50px'}
   
        return (
        <>
      
        <div className="show">

            <h1>The component has mounted</h1>
            <p>{this.state.counter}</p>
            
        </div>
        
        <button onClick={this.handleEvent}>{this.state.show ? "hide" : "show"} </button>


        {
            (this.state.show) && 
            
            <div style ={container}>
               <img src= {this.state.Person.imgSrc} alt="" style={img}/>
                <div>
                <h1>{this.state.Person.fullName}</h1>
                <h3>{this.state.Person.profession}</h3>
                <p>{this.state.Person.bio}</p>
                </div>
            </div>
        }
        
        
        
        </>

          );
    }
}
 
export default profile;