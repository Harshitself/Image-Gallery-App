/* eslint-disable react/prop-types */
import { API_URL } from "../utils/constants";

function PhotoModal({ selectedPhoto, isModalVisible, onCloseModal }) {
  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-70"></div>
      <div className="photo-modal z-50 p-4 bg-white rounded-lg shadow-lg relative">
        <span
          className="close absolute top-2 right-2 text-red-600 text-2xl cursor-pointer"
          onClick={onCloseModal}
        >
          &times;
        </span>
        <img
          src={selectedPhoto.urls.regular}
          alt={selectedPhoto.description}
          className="max-h-96 w-full"
        />
        <div className="modal-info mt-4 text-center">
          <p className="text-lg font-bold">{selectedPhoto.user.name}</p>
          <p className="text-gray-600">Likes: {selectedPhoto.likes}</p>
          <p className="text-gray-600">
            Instagram: {selectedPhoto.user.instagram_username}
          </p>
          <p className="text-gray-600">Author: {selectedPhoto.user.username}</p>
          <a
            href={`API_URL/${selectedPhoto.user.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-2"
          >
            View Profile
          </a>
          <button className="mt-2">
            <a
              href={selectedPhoto.links.download}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
