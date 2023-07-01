import { Request, Response } from "express";
import httpStatus from "http-status";
import { Music } from "protocols";
import * as musicService from "../services/music-service";

export async function createMusic(req: Request, res: Response) {
  try {
    const music = req.body as Music;
    await musicService.createMusic(music);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getMusic(req: Request, res: Response) {
  try {
    const music = await musicService.getMusic();
    res.send(music.rows);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function deleteMusic(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await musicService.deleteMusic(parseInt(id));
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

export async function updateMusic(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedMusic = req.body as Music;
    await musicService.updateMusic(parseInt(id), updatedMusic);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}
