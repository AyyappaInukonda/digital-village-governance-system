// File Path: src/ErrorPage.jsx

import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4 text-gray-800">Oops! Page not found.</p>
        <p className="text-lg mt-2 text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a href="/" className="inline-block mt-6 px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
