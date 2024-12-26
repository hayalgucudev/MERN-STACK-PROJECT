export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

export interface Statistics {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}

export interface StatisticsState {
  data: Statistics | null;
  loading: boolean;
  error: string | null;
}