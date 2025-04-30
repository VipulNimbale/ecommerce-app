import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
