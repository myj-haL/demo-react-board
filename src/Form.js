import React, {Component} from "react";
import ReactDOM from 'react-dom';

class Form extends Component {
    autoState = {
        name : '',
        job : '',
    }

    state = this.autoState


    handler = (event) => {
        const {name, value} = event.target

        this.setState({
            [name] : value,
        })
    }

    render(){ 
        const {name, job} = this.state;

        return (
            <form>
                
                
                <div className="form-box form-row"> 
                
                    <div className="form-group col-md-5">
                        <label htmlFor="name">Name</label> 
                        <input type="text" name="name" className="form-control col-md-6" id="name" value={name} onChange={this.handler} />
                    </div>


                    <div className="form-group col-md-5">
                        <label htmlFor="job">Job</label>
                        <input type="text" className="form-control col-md-6" name="job" id="job" value={job} onChange={this.handler}/>
                    </div>

                    <input  type="button" value="submit" className="btn btn-primary submit-btn" onClick={this.submitForm} />
                </div>
                
            </form>
        )
    }


    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.autoState)
        

        /* const input = document.querySelectorAll('input');
        console.log(input.value);

        if (input) {
            alert("빈칸을 모두 입력해주세요!"); 
            
            return false;
        }
        else {
            
        } */
        

        
        

        
    }

    
}








export default Form;