import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './LogIn.css'

export default function LogInDrawer() {
  const [state, setState] = React.useState(false);
  const anchor = 'right';

  const toggleDrawer = (open) => () => {  
    setState(open);
  };
  
  return (
    <div>     
      <Button onClick={toggleDrawer(true)}>{anchor}</Button>
      <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
        <h1 className="TituloLogIn">LOG IN</h1>
        <form class='FormularioLogIn'>
          <label for='username'>
            <input size='30' type='text' class='Input' id='username' placeholder='Username'></input>
          </label><br />
          <label for='password'>
            <input size='30' type='text' class='Input' id='password' placeholder='Password' minLength='8'></input>
          </label><br /><br />
          <button type='submit'>
            <Button variant='contained' size='large' color='secondary'>LOG IN</Button>
          </button>
        </form>
        <div className='UploadButton'>
          <Button variant='contained' size='large' color='secondary'>LOG IN</Button>
        </div>
      </Drawer>      
    </div>
  );
}