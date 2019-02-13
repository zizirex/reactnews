import React from 'react'
import Button from '@material-ui/core/Button';

const Nav = (props) => (

        <div style={{textAlign: "center"}}>
            <Button onClick={props.getCountry}>
                USA
            </Button>
            <Button onClick={props.getCountry}>
                Canada
            </Button>
            
            <Button onClick={props.getCountry}>
                UK
            </Button>
            <Button onClick={props.getCountry}>
                China
            </Button>
        </div>

)


export default Nav;