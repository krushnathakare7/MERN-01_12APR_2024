import React from 'react';

class Form extends React.Component {

    constructor(){
        super();
        this.state = {
            textValue:""
        }
    }

    captureText = (e)=>{
        this.setState( {textInput: e.target.value})
    }

    render(){
        return (
            <div>
                <form >
                    <label>
                        Name:
                        <input type='text' name='name' value={this.state.textValue}
                            onChange={this.captureText}
                        />
                    </label>
                        <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

export default Form;