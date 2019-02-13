import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



const Form =(props) => {

    return (
        <div style={{ textAlign: "center"}}>
            <h1>React News API</h1>
            <form onSubmit={props.getNews}>
                <input type="text" name="search"/>
                <button>Search</button>
            </form>

        </div>

    )
};



export default Form;