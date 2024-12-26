import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Song } from '../types'; // Import the Song interface

interface SongItemProps {
  song: Song;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedSong: Omit<Song, 'id'>) => void;
  
}

const SongItemContainer = styled.li`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SongDetails = styled.div`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const SongItem: React.FC<SongItemProps> = ({ song, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState({ ...song });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(song.id, editedSong);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedSong({ ...song }); // Reset to original song data
  };

  return (
    <SongItemContainer>
      {isEditing ? (
        <div>
          <Input
            type="text"
            value={editedSong.title}
            onChange={(e) => setEditedSong({ ...editedSong, title: e.target.value })}
          />
          <Input
            type="text"
            value={editedSong.artist}
            onChange={(e) => setEditedSong({ ...editedSong, artist: e.target.value })}
          />
          <Input
            type="text"
            value={editedSong.album}
            onChange={(e) => setEditedSong({ ...editedSong, album: e.target.value })}
          />
          <Input
            type="text"
            value={editedSong.genre}
            onChange={(e) => setEditedSong({ ...editedSong, genre: e.target.value })}
          />
          <Button onClick={handleSaveClick}>Save</Button>
          <Button onClick={handleCancelClick}>Cancel</Button>
        </div>
      ) : (
        <>
          <SongDetails><strong>Title:</strong> {song.title}</SongDetails>
          <SongDetails><strong>Artist:</strong> {song.artist}</SongDetails>
          <SongDetails><strong>Album:</strong> {song.album}</SongDetails>
          <SongDetails><strong>Genre:</strong> {song.genre}</SongDetails>
          <Button onClick={handleEditClick}>Edit</Button>
         <Button onClick={() => onDelete(song.id)}>Delete</Button>

        </>
      )}
    </SongItemContainer>
  );
};

export default SongItem;