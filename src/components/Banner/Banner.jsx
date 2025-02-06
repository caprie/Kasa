
import React from 'react';
import ReactDOM from 'react-dom/client';
import './banner.css'; // Assuming you have a CSS file for styling

function Banner() {
  return (
    <div id="Banner">
      <img src="path/to/your/image.jpg" alt="Banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Banner />);