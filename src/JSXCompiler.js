/**
 * Created by trainees on 3/15/2017.
 */
import React from 'react'
import './JSXCompiler.css'

class JSXCompiler extends React.Component{

    constructor(){
        super();
        this.state = {
            input: '/*Add your jsx here */',
            output: '',
            err: ''
        }
    }

    update(e){
        let code = e.target.value;
        try {
            this.setState({
               output: window.Babel.transform(
                   code,
                   {presets: ['es2015','react']}
               ).code,
                err: ''
            });
        }catch (err){
            this.setState({err: err.message});
        }
    }

    render(){
        return(
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea onChange={this.update.bind(this)}
                        defaultValue={this.state.input}>
                    </textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

export default JSXCompiler