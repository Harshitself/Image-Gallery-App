/* eslint-disable react/prop-types */

function Photo({ photo, openModal }) {
  return (
    <div className="border border-gray-300 rounded shadow-md cursor-pointer hover:shadow-lg">
      <div
        key={photo.id}
        className="bg-white rounded-lg overflow-hidden shadow-lg"
      >
        <img
          src={photo.urls.regular}
          alt={photo.description}
          className="w-full h-48 object-cover"
          onClick={() => openModal(photo)}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            User: {photo.user.name}
          </h3>
          <p className="text-gray-600">Likes: {photo.likes}</p>
        </div>
        <div className="p-4">
          <button
            onClick={() => openModal(photo)}
            className="bg-blue-500 text-white rounded px-2 py-1"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Photo;
