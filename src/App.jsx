import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";
import PhotoModal from "./components/PhotoModal";

function App() {
  const [searchQuery, setSearchQuery] = useState("all");
  const [isModalVisible, setModalVisibility] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [headerHeight, setHeaderHeight] = useState("50vh");

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalVisibility(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalVisibility(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderHeight("30vh");
      } else {
        setHeaderHeight("50vh");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header/Hero Section */}
      <header
        className="fixed top-0 left-0 w-full bg-blue-500 p-4 transition-all duration-500"
        style={{ height: headerHeight }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className=" text-5xl font-bold mb-4 mt-1 text-blue-50">
            Image Gallery
          </h1>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      </header>

      {/* Main Content */}
      <div className=" p-4" style={{ marginTop: headerHeight }}>
        <PhotoList searchQuery={searchQuery} openModal={openModal} />

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
