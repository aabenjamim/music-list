import { Music } from "protocols";
import {connection} from "../database/database.connection";

export async function createMusic(music: Music) {
    return connection.query(`
    INSERT INTO playlist (title, by) VALUES ($1, $2)
    ` , [music.title, music.by]);
}

export async function getMusic() {
    return connection.query(`
    SELECT * FROM playlist
    `)
}

export async function deleteMusic(id: number) {
    return connection.query(`
    DELETE FROM playlist WHERE id = $1
    `, [id])
}

export async function updateMusic(id: number, updatedMusic: Music) {
    return connection.query(`
    UPDATE playlist SET title = $1, by = $2 WHERE id = $3
    `, [updatedMusic.title, updatedMusic.by, id])
}
