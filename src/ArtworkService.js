const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export const fetchArtworks = async (page = 1, limit = 12) => {
  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const fetchArtworkDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const filterArtworksByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/search?q=&query[term][category_ids]=${category}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};


export const searchArtworks = async (query) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};