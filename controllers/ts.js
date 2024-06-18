import express from 'express';
import {v4 as uuidv4} from 'uuid';

import fs from 'fs';
var songs = [];
fs.readFile('./controllers/lyrics.json', 'utf8', (err, data) => {
    
    if(err) {
        console.error(err);
        return;
    }
    songs = JSON.parse(data);
    for (let obj of songs) { // Use 'of' instead of 'in' to iterate over array elements
        obj['id'] = uuidv4(); // Add a new 'id' property to each object
        obj['SongName'] = obj['Song Name']
        delete obj['Song Name']
    }
    //console.log(songs);
});


    

export const getSongs = (req, res) => {
    console.log(songs);
    res.send(songs);
}

export const createSong = (req, res) => {
    const song = req.body

    songs.push({...song, id: uuidv4()}); // makes object with all properties + id

    if (res.send(songs)) {
        console.log("New song added");
    }
}

export const findSong = (req, res) => {
    const {SongName} = req.params;
    const found_song = songs.find((song) => song.SongName == SongName);
    res.send(found_song);
}

export const getLyrics = (req, res) => {
    const {SongName} = req.params;
    const chosen_song = songs.find((song) => song.SongName == SongName);
    console.log(chosen_song)
    if(res.send(chosen_song.Lyrics)) {
        console.log(chosen_song.Lyrics)
    } else {
        console.log("Failed to retrieve song")
    }
}

