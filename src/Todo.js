import { ListItem, makeStyles } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List, Modal, Button } from '@material-ui/core';
import React, { useState } from 'react'
import './Todo.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

function Todo(props) {
    const updateTodo = () => {
        props.setTodos(setInput);
        setOpen(false);
    }
    const [input, setInput] = useState("");
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }


    return (<>
        <Modal
            open={open}
            onClose={e => setOpen(false)}

        >
            <div className={classes.paper}>
                <h1>I am Model</h1>
                <input value={input} onChange={event => setInput(event.target.value)} ></input>
                <Button onClick={e => setOpen(false)}>Update ToDO</Button>
            </div>

        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.text} secondary="📝Description is here" >
                </ListItemText>
                <div className="body_btn">
                    <button onClick={e => setOpen(true)}>Edit</button>
                    <button className="delete" onClick={() => { props.onSelect(props.id) }}>Delete</button> </div>

            </ListItem>
        </List>

    </>


    )
}

export default Todo;
