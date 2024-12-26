// src/api/statistics.ts

const API_URL = process.env.REACT_APP_API_URL;

export const fetchStatistics = async () => {
  const response = await fetch(`${API_URL}/statistics`);
  if (!response.ok) {
    throw new Error('Failed to fetch statistics');
  }
  return response.json();
};