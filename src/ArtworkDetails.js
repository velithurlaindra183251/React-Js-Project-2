import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchArtworkDetails } from '../src/ArtworkService';
import CommentsForm from '../src/CommentsForm';
import sml from '../src/sml1.jpg'

const dummyImageUrl = 'https://via.placeholder.com/843x843.png?text=Image+Not+Available';

const handleImgError = (event) => {
  event.target.src = dummyImageUrl;
};

const ArtworkDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const previousPage = location.state?.from || '/';

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchArtworkDetails(id);
        setArtwork(data.data);
      } catch (error) {
        setError('Error fetching artwork details');
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!artwork) return <p>No artwork found</p>;

  return (

    <div className='articletop' style={{ backgroundColor: "lightblue" }}>
      <Link to={previousPage} style={{ marginRight: '100%', textDecoration: 'none' }} className='link1'><strong>Back</strong></Link>
      <h1>{artwork.title}</h1>

      <img style={{ width: "500px", height: "500px", borderRadius: '30px' }}
        src={artwork?.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
          : dummyImageUrl}
        alt={artwork?.title || 'Artwork image'} className="descriptionImage" onError={handleImgError} />

      <p><strong><b>Artist:</b></strong> {artwork.artist_display}</p>
      <p><strong>Date:</strong> {artwork.date_display}</p>
      <p><strong>Reference Number:</strong> {artwork.main_reference_number}</p>
      <p><strong>Dimensions:</strong> {artwork.dimensions}</p>

      <CommentsForm />
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>

            <h5 style={{ backgroundColor: 'rgb(5, 4, 4 ', color: 'white', margin: 'auto', padding: '30px', fontFamily: "italic" }}><img src={sml} alt='' width='200px' /><br></br>Indra@gmail.com</h5>
         
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArtworkDetail;