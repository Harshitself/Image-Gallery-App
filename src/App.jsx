import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PhotoList from './components/PhotoList';
import PhotoModal from './components/PhotoModal';
// import UnsplashService from './services/unsplashService';
// import UnsplashService from './services/UnsplashService';

function App() {
  const [searchQuery, setSearchQuery] = useState('all');
  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [headerHeight, setHeaderHeight] = useState('50vh');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [photos, setPhotos] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalVisibility(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalVisibility(false);
  };

  // useEffect(() => {
  //   const fetchPhotosFromService = async () => {
  //     try {
  //       const data = await UnsplashService.fetchPhotos(searchQuery, currentPage, 9);
  //       // console.log(data);
  //       setPhotos(data.results);
  //       setTotalPages(data.total_pages);
  //     } catch (error) {
  //       console.error('Error fetching photos:', error);
  //     }
  //   };

  //   fetchPhotosFromService();
  // }, [searchQuery, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderHeight('30vh');
      } else {
        setHeaderHeight('50vh');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handlePageChange = (page) => {
  //   if (page >= 1 && page <= totalPages) {
  //     setCurrentPage(page);
  //   }
  // };
  

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header/Hero Section */}
      <header
        className="fixed top-0 left-0 w-full bg-blue-500 p-4 transition-all duration-500"
        style={{ height: headerHeight }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className=" text-5xl font-bold mb-4 mt-1 text-blue-50">Image Gallery</h1>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      </header>

      {/* Main Content */}
      <div className=" p-4" style={{ marginTop: headerHeight }}>
        {/* <h2 className=" text-2xl font-bold mb-4">Photos</h2>
        <p className=" text-gray-500 mb-4">
          {photos.length} photos found
        </p>
        <p className=" text-gray-500 mb-4">
          Page {currentPage} of {totalPages}
        </p> */}
      
        <PhotoList 
          // photos={photos}
          searchQuery={searchQuery}
          // setSelectedPhoto={setSelectedPhoto}
          openModal={openModal}
          // currentPage={currentPage}
          // totalPages={totalPages}

          // onPageChange={handlePageChange}
        />
        <PhotoModal
          selectedPhoto={selectedPhoto}
          isModalVisible={isModalVisible}
          onCloseModal={closeModal}
        />
      </div>
    </div>
  );
}

export default App;
