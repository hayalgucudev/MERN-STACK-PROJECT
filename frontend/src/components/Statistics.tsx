import React, { useEffect, useState } from 'react';
import { fetchStatistics } from '../api/statistics';

const Statistics: React.FC = () => {
  const [stats, setStats] = useState<{
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const getStats = async () => {
  try {
    const data = await fetchStatistics();
    console.log('Fetched data:', data);
    setStats(data);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    setError('Failed to load statistics. Please try again later.');
  }
};

    getStats();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!stats) {
    return <p>Loading statistics...</p>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Songs: {stats.totalSongs}</p>
      <p>Total Artists: {stats.totalArtists}</p>
      <p>Total Albums: {stats.totalAlbums}</p>
      <p>Total Genres: {stats.totalGenres}</p>
    </div>
  );
};
export default Statistics;


