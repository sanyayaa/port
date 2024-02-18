import React from 'react';

const Card = ({ imageSrc, year, title, description, amazonLink }) => {
  return (
    <div className="mt-16 text-center">
        <h1 className="text-3xl font-bold mb-4">PUBLISHED BOOK</h1>
        <div className="ml-20 mt-60 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mr-1">

            <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-2">

            {/* Left Column: Image */}
            <div className="col-span-1">
                <img src={imageSrc} alt={title} className="w-full h-fit object-cover m-4" />
            </div>
            {/* Right Column: Content */}
            <div className="col-span-1 p-9">
                <div className="text-gray-500 text-sm">{year}</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                {/* Button for Purchase */}
                <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                Purchase on Amazon
                </a>
            </div>
            </div>


            <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-2">

            {/* Left Column: Image */}
            <div className="col-span-1">
                <img src={imageSrc} alt={title} className="w-full h-fit object-cover m-4" />
            </div>
            {/* Right Column: Content */}
            <div className="col-span-1 p-9">
                <div className="text-gray-500 text-sm">{year}</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                {/* Button for Purchase */}
                <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                Purchase on Amazon
                </a>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
