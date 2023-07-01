import { Music } from "protocols";
import * as musicRepository from "../repositories/music-repository";

export async function createMusic(music: Music) {
  try {
    return await musicRepository.createMusic(music);
  } catch (error) {
    throw new Error("Failed to create music.");
  }
}

export async function getMusic() {
  try {
    return await musicRepository.getMusic();
  } catch (error) {
    throw new Error("Failed to retrieve music.");
  }
}

export async function deleteMusic(id: number) {
  try {
    await musicRepository.deleteMusic(id);
  } catch (error) {
    throw new Error("Failed to delete music.");
  }
}

export async function updateMusic(id: number, updatedMusic: Music) {
  try {
    return await musicRepository.updateMusic(id, updatedMusic);
  } catch (error) {
    throw new Error("Failed to update music.");
  }
}
