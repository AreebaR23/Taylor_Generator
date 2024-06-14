import express from 'express';
import {v4 as uuidv4} from 'uuid';

import fs from 'fs';
var songs = [];
fs.readFile('./controllers/ts.json', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    songs = JSON.parse(data);
    console.log(songs);
});

export const getSongs = (req, res) => {
    console.log(songs);
    res.send(songs);
}

export const createSong = (req, res) => {
    const song = req.body

    songs.push({...song, id: uuidv4()}); // makes object with all properties + id

    res.send(songs);
}

export const findSong = (req, res) => {
    const {id} = req.params;
    const found_song = songs.find((song) => song.id == id);
    res.send(found_song);
}

export const getLyrics = (req, res) => {
    const {id} = req.params;
    const chosen_song = songs.find((song) = song.id == id);
    res.send(chosen_song.album); //Change dataset?
}

// export const updateSong = (req, res) => {
//     const{id} = req.params;
//     const
// }
// export const updateUser = (req, res) => {
//     const {id} = req.params;
//     const {firstname, lastname, age} = req.body;

//     const old_user = users.find((user)=> user.id == id);

//     if(firstname){ old_user.firstname = firstname; }
//     if(lastname){ old_user.lastname = lastname; }
//     if(age){ old_user.age = age; }

//     res.send(`User with id: ${id} has been updated`);

    
// }

// export const deleteUser = (req, res) => {
//     const {id} = req.params;
//     //removes items that return false
//     //if id != the user corresponding to this id in the users this expression returns false so remove it
//     users = users.filter((user) => user.id != id);
//     res.send(`User with id ${id} deleted from the databse.`)
// }



