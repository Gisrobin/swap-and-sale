import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this import
import { FaSearch, FaBell, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../context/ec361506aa17033dfddedd9e31134519.jpg';
import image2 from '../context/8973317104f7a5a83f321e2318f08af6.jpg';
import image3 from '../context/87872305c74ba291e94de2ee2ef980e7.jpg';
import image4 from '../context/99753e92ed63e347e0f0a110de13fc08.jpg';
import image from '../context/tech-daily-cF6Le-0viHY-unsplash.jpg';
import imagei from '../context/andrey-matveev-DobNb8cTQ_s-unsplash.jpg';
import imageb from '../context/gomi-4PrQIi8pAeQ-unsplash.jpg';
import imagec from '../context/julia-tretel-XljnuLUrxjs-unsplash.jpg';
import imagem from '../context/supratik-deshmukh-iO0I6-mhDEY-unsplash.jpg';
import imagef from '../context/tony-luxon-R6LQAJIEsgY-unsplash.jpg';
import imageh from '../context/courtney-spittle-6V-P1W7Fsvs-unsplash.jpg';
import imagesm from '../context/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg';
import imageg from '../context/sanju-pandita-G9UI8uFGRxY-unsplash.jpg';
import imagelaptop from '../context/howard-bouchevereau-RSCirJ70NDM-unsplash.jpg';
import clipper from '../context/andrea-donato-zC1CL05YAas-unsplash.jpg';


const Dashboard = () => {
  const navigate = useNavigate(); // <-- Add this line

  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {name: 'Electronics', icon: '📺'},
    { name: 'Fashion', icon: '👗' },
    { name: 'Phones', icon: '📱' },
    { name: 'Laptops', icon: '💻' },
  ]

    const products = [
    { name: 'Smart TV', price: '$150.00', image: `${image}`, category: 'Electronics' },
    { name: 'Hair Dryer', price: '$29.99', image: `${imageh}`, category: 'Electronics' },
    { name: 'Gaming Mouse', price: '$13.99', image: `${imagem}`, category: 'Electronics' },
    { name: 'Wall Clock', price: '$25.00', image: `${imagec}`, category: 'Toys' },
    { name: 'Power Bank', price: '$19.99', image: `${imageb}`, category: 'Electronics' },
    { name: 'Fan', price: '$35.00', image: `${imagef}`, category: 'Toys' },
    { name: 'Smart Phone', price: '$120.00', image: `${imagesm}`, category: 'Toys' },
    { name: 'Laptop', price: '$200.00', image: `${imagelaptop}`, category: 'Toys' },
    { name: 'Clipper', price: '$40.00', image: `${clipper}`, category: 'Toys' },
    { name: 'PS5 Gamepad', price: '$15.00', image: `${imageg}`, category: 'Toys' },
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Handle Next arrow click
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Previous arrow click
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

   // Handle Next category click
  const goToNextCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  // Handle Previous category click
  const goToPrevCategory = () => {
    setCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  return (
    <div style={{height:'100vh', overflow: 'auto'}}>
      {/* Add a button to route to onboarding */}
      <button
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 100,
          background: '#1E90FF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/onboarding')}
      >
        Go to Onboarding
      </button>
      <div style={{
        position: 'fixed',
        zIndex: '20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(241, 243, 247)',
        padding: '10px 20px',
        borderRadius: '5px',
        width: '100%',
        boxSizing: 'border-box',
        backgroundImage: `url (${image1})`,
        backgroundSize: 'cover',
        
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#D3D9E6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            D
          </div>
          <span style={{
            color: '#333333',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Good morning Dave
          </span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '70px', cursor: 'pointer'}}>
          <FaSearch style={{
            fontSize: '18px'
          }}/>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <span style={{
              fontSize: '16px',
              color: '#666666'
            }}>
              <FaBell style={{
                fontSize: '18px',
                color: 'black',
                cursor: 'pointer'
              }}/>
            </span>
          </div>
        </div>
      </div>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
        margin: '12px auto',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}>
        {/* Image Slider */}
        <div style={{
          display: 'flex',
          width: `${images.length * 100}%`,
          height: '100%',
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: 'transform 0.5s ease-in-out'
        }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: `${100 / images.length}%`,
                height: '100%',
                objectFit: 'contain'
              }}
            />
          ))}
        </div>

        {/* Previous Arrow */}
        <div
          onClick={goToPrev}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            fontSize: '24px',
            color: '#FFFFFF',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }
          }}
        >
          <FaArrowLeft />
        </div>

        {/* Next Arrow */}
        <div
          onClick={goToNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            fontSize: '24px',
            color: '#FFFFFF',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }
          }}
        >
          <FaArrowRight />
        </div>
      </div>
      <div style={{
      backgroundColor: '#E6ECEF',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* Category Slider */}
      <div style={{
        width: '100%',
        maxWidth: '800px',
        height: '100px',
        overflow: 'hidden',
        position: 'relative',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          display: 'flex',
          width: `${categories.length * 200}px`, // 200px per category
          height: '100%',
          transform: `translateX(-${categoryIndex * 200}px)`,
          transition: 'transform 0.5s ease-in-out',
        }}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                width: '200px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#333333',
              }}
            >
              <span style={{ fontSize: '40px' }}>{category.icon}</span>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        {/* Previous Arrow */}
        <div
          onClick={goToPrevCategory}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#666666',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <FaArrowLeft />
        </div>
        {/* Next Arrow */}
        <div
          onClick={goToNextCategory}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#666666',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <FaArrowRight />
        </div>
      </div>

      {/* Flash Sales Banner */}
      <div style={{
        margin: '20px 0',
        padding: '10px',
        backgroundColor: '#FFD700',
        color: '#333333',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '18px',
        fontWeight: 'bold',
      }}>
        Flash Sales - Valid till June 30
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '10px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.name}</h3>
            <p style={{ fontSize: '14px', color: '#007BFF' }}>{product.price || 'N/A'}</p>
            <button
              style={{
                backgroundColor: '#007BFF',
                color: '#FFFFFF',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;