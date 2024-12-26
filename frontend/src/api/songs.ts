// src/api/songs.ts
import { Song } from '../types';
const API_URL = process.env.REACT_APP_API_URL;

export const fetchSongs = async () => {
  const response = await fetch(`${API_URL}/songs`);
  if (!response.ok) {
    throw new Error('Failed to fetch songs');
  }
  return response.json();
};

export const createSong = async (song: { title: string; artist: string; album: string; genre: string }) => {
  const response = await fetch(`${API_URL}/songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  if (!response.ok) {
    throw new Error('Failed to create song');
  }
  return response.json();
};


export const updateSong = async (id: string, song: Omit<Song, 'id'>) => {
  const response = await fetch(`${API_URL}/songs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });

  if (!response.ok) {
    throw new Error('Failed to update song');
  }

  return await response.json();
};

export const deleteSong = async (id: string) => {
  const response = await fetch(`${API_URL}/songs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete song');
  }
  return response.json();
};