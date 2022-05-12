import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';

function Login() {
   
    const history = useHistory();

    const redirect = (path) => {
      history.push(path);
    }
    
    return (
        
        <Button variant="outlined" size="medium" onClick={redirect("/nametool")}> Login </Button>
                       
        
    );
}

export default Login;
