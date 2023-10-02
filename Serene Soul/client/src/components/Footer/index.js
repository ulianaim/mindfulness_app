import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back to the Home Page
          </button>
        )}
        <h4 className="justify-center">
          "Happiness is not by chance, but by choice ❤ "
        </h4>
        <h6 className="justify-center"> &copy; 2023 Marianna Bruns, Uliana Imangulova, Lexi Geller, & Amazing Grace</h6>
      </div>
    </footer>
  );
};

export default Footer;
