import React from 'react'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/product-listing');
  };
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/paradise-nursery/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Welcome to<br />Paradise Nusrey</h1>
        <p className="text-md md:text-lg mb-8 text-white-400">where green meets serenty!</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="z-10 max-w-3xl text-white text-center mt-8 px-4 md:px-4">
        <p className="text-md md:text-lg mb-4">
          Paradise Nursery Online Shop brings the beauty of nature directly to your doorstep, offering a wide range of plants, trees, and gardening essentials with just a few clicks. Whether you're looking for indoor plants, outdoor shrubs, or specialty trees, the online store is designed to cater to garden enthusiasts of all levels. Paradise Nursery’s online platform provides detailed plant descriptions, care tips, and expert advice, making it easy to find exactly what you need. With convenient delivery options and an ever-expanding catalog, Paradise Nursery Online Shop is your one-stop destination for transforming your space into a lush, green paradise.
        </p>
        
      </div>
    </div>
  )
}

export default LandingPage;
