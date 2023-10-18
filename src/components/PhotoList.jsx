/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Photo from './Photo'; 
import UnsplashService from '../services/UnsplashService';


function PhotoList({ searchQuery,openModal }) {

  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPhotosFromService = async () => {
      try {
        const data = await UnsplashService.fetchPhotos(searchQuery, currentPage, 9);
        // console.log(data);
        setPhotos(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotosFromService();
  }, [searchQuery, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const onPageChange = handlePageChange;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
          <Photo
            key={photo.id}
            photo={photo}
            openModal={openModal} // You can change this to the appropriate action
          />
        ))}
        {/* {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={photo.urls.regular}
              alt={photo.description}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{photo.user.name}</h3>
              <button
                onClick={() => openModal(photo)}
                className="bg-blue-500 text-white rounded px-2 py-1"
              >
                View
              </button>
            </div>
          </div>
        ))} */}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`${
            currentPage === 1 ? 'hidden' : 'block'
          } bg-blue-500 text-white rounded px-2 py-1 mr-2`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`${
            currentPage === totalPages ? 'hidden' : 'block'
          } bg-blue-500 text-white rounded px-2 py-1`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PhotoList;
