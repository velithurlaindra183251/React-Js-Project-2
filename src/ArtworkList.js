import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArtworks, searchArtworks, filterArtworksByCategory } from '../src/ArtworkService';
import Pagination from '../src/Pagination';
import SearchFilter from '../src/SearchFilter';


const dummyImageUrl = 'https://via.placeholder.com/843x843.png?text=Image+Not+Available';

const handleImgError = (event) => {
  event.target.src = dummyImageUrl;
};

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await searchArtworks(searchTerm);
        } else if (category) {
          data = await filterArtworksByCategory(category);
        } else {
          data = await fetchArtworks(currentPage);
        }
        setArtworks(data.data);
        setTotalPages(data.pagination.total_pages);
      } catch (error) {
        setError('Error fetching artworks');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, searchTerm, category]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilter = (category) => {
    setCategory(category);
    setCurrentPage(1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="headingtop"><b><i> List of Artwork</i></b></h1>

      <center>
        <SearchFilter onSearch={handleSearch} onFilter={handleFilter} className="searchtop" />
      </center>

      <div className="row">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="col-md-4 mb-4">
            <div className="card">

              <Link to={`/artwork/${artwork.id}`}>
                <img src={artwork?.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` : dummyImageUrl}
                  alt={artwork?.title || 'Artwork image'} className="card-img-top" onError={handleImgError} />
                <div className="card-body">
                  <h5 className="card-title">{artwork.title}</h5>
                </div>
              </Link>

            </div>
          </div>
        ))}
      </div>

      <center>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </center>

    </div>
  );
};

export default ArtworkList;