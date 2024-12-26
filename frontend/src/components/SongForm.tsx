import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSongRequest } from '../store/songsSlice';
import styled from '@emotion/styled';


// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SongForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createSongRequest({ title, artist, album, genre }));
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <Button type="submit">Add Song</Button>
    </Form>
  );
};

export default SongForm;
