import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import {
  fetchSongsRequest,
  deleteSongRequest,
  updateSongRequest,
} from '../store/songsSlice';
import { Song } from '../types';
import SongItem from './SongItem';
import styled from '@emotion/styled';

const SongsListContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SongsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);

  React.useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteSongRequest(id));
  };

  const handleUpdate = (id: string, updatedSong: Omit<Song, 'id'>) => {
    dispatch(updateSongRequest({ id, song: updatedSong }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (songs.length === 0) {
    return <p>No songs available.</p>;
  }

  return (
    <SongsListContainer>
      <h1>Songs List</h1>
      <ul>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </SongsListContainer>
  );
};

export default SongsList;