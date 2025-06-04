import React from "react";
import image1 from '../images/image1.jpg';
import image2 from '../images/Facebook_Logo_(2019).png';
import image3 from '../images/Google__G__logo.svg';

const Signin = () => {
  return ( 
    <div style={{
       backgroundImage: `url(${image1})`,
       backgroundSize: 'cover',
       height: '100%',
       width: '100%',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       borderTopRightRadius: '20px',
       borderTopLeftRadius: '20px',
    }}
    >
      <div style={{display: 'flex', color: 'white', gap: '167px', paddingTop: '16px', marginLeft: '12px', fontSize: '12px',}}>
      <div>
      <span>9:41</span>
      </div>

      <div style={{
        color: 'white',
        display: 'flex',
        gap: '6px',
      }}>
        <span><i class="fa-solid fa-signal"></i></span>
        <span><i class="fa-solid fa-wifi"></i></span>
        <span><i class="fa-solid fa-battery-full"></i></span>
      </div>
    </div>

      <div style={{
        color: 'white',
        fontSize: '20px',
        width: '40px',
        marginLeft: '17px',
        marginTop: '30px',
        border: '1px solid white',
        textAlign: 'center',
        padding: '3px',
      }}>
      <span><i class="fa-solid fa-arrow-left"></i></span>
      </div>

      <div style={{
        paddingTop: '15px',
      }}
      >

        <p style={{
           color: 'white',
           fontSize: '18px',
           textAlign: 'center',
           fontWeight: 'bold',
           fontFamily: 'arial',
        }} 
        >Login and <br></br>setup your profile</p>

        <p style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '10px',
          fontFamily: 'arial',
          paddingTop: '5px',
        }}
        >complete your sign up to access the exclusive features</p>
      </div>

      <div style={{
        backgroundColor: '#011f4b',
        width: '99%',
        height: '67%',
        marginLeft: '1px',
        marginTop: '25px',
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",
        borderBottomLeftRadius: "30px",
        position: 'fixed',
      }}>

      <div style={{
        paddingTop: '20px',
      }}>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        justifyContent: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
        width: '85%',
        marginLeft: '20px',
        borderRadius: '5px',
      }}>

        <button style={{
          padding: '7px 30px',
          fontSize: '12px',
          color: 'white',
          backgroundColor: "#D1D5DB",
          border: 'none',
          borderRadius: '5px',
        }}
        >LOG IN</button>

        <button style={{
          padding: '5px 30px',
          fontSize: '12px',
          color: 'white',
          border: 'none',
          backgroundColor: '#B0B6BE',
          borderRadius: '5px',
        }}>
        SIGN UP</button>
      </div>
       
       <div style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'arial',
        fontSize: '15px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginLeft: '15px',
       }}>

       <label>Email</label> 

        <input style={{
          width: '93%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid white',
          padding: '8px',
          borderRadius: '5px',
          marginTop: '5px',
        }}
         type="email"
         placeholder="Type your email"/>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'arial',
        fontSize: '15px',
        fontWeight: 'bold',
        marginTop: '14px',
        marginLeft: '15px',
        }}>

        <label>Password</label>

        <input style={{
          width: '93%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid white',
          padding: '8px',
          borderRadius: '5px',
          marginTop: '5px',
        }} 
        type="password"
        placeholder="Type your password"
        />
        </div>

        <button style={{
          backgroundColor: '#B0B6BE',
          border: 'none',
          marginLeft:'70px',
          marginTop: '25px',
          padding: '9px 46px',
          color: 'white',
          borderRadius: '5px',
        }}>SIGN IN</button>


        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '30px',
          marginLeft: '40px',
        }}> 

        
        <div style={{
          display: 'flex',
        }}>

        <button style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '5px',
          color: 'white',
          fontSize: '10px',
          border: '1px solid white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: '7px 10px',
        }}>
          <img src={image3} alt="Google icon" style={{width: '20px', marginRight: '8px'}}
          />
          GOOGLE</button>
        </div>

        <div style={{
          display: 'flex',
        }}>

        <button style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '5px',
          color: 'white',
          fontSize: '10px',
          border: '1px solid white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: '7px 10px',
        }}>
          <img src={image2} alt="Favebook logo"
            style={{ width: '20px', marginRight: '8px'}}
          />
          FACEBOOK</button>

          <div style={{
            background: 'black',
          }}>
          </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Signin;