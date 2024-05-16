import express from 'express';
import {v4 as uuidv4} from 'uuid';

let users = [
    {
        "firstname": "user1",
        "lastname": "ln",
        "age": 10
}]

export const getUsers = (req, res) => {
    console.log(users)
    res.send(users);
}

export const createUsers = (req, res) => {
    //input object = req,body
    const user = req.body

    //creates users
    users.push({...user, id: uuidv4()}); // makes object with all properties + id

    res.send(users);
}

export const findUser = (req, res) => {
    //res.send('GET ID ROUTE')
    const { id } = req.params; 
    const found_user = users.find((user) => user.id == id);
    res.send(found_user)
}
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;

    const old_user = users.find((user)=> user.id == id);

    if(firstname){ old_user.firstname = firstname; }
    if(lastname){ old_user.lastname = lastname; }
    if(age){ old_user.age = age; }

    res.send(`User with id: ${id} has been updated`);

    
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    //removes items that return false
    //if id != the user corresponding to this id in the users this expression returns false so remove it
    users = users.filter((user) => user.id != id);
    res.send(`User with id ${id} deleted from the databse.`)
}