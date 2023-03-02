# conditional rendering

## inline JSX

import React,{Component} from "react";
import './App.css'

class App extends Component {
render() {
return(

<div className='App'>
{ showMessage && <p>Hello World</p>}
</div>
);
}
}

export default App;

## subrender()

import React,{Component} from "react";
import './App.css'

class App extends Component {
renderMessage(show){
if (show){
return (<p>hello world</p>)
} else{
return (null)
}
}

    render(){
        const showMessage = true;
        <div className='App'>
        {this.renderMessage}
        </div>

};
}
