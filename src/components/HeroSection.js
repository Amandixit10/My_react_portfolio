/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Buttons from './Buttons';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg'
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg'

const HeroStyle=styled.div`
.hero{
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.hero_heading{
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
span{
    display: inline-block;
    width: 100%;
}
.hero_name{
    font-size: 7rem;
    font-family:"Montserrat SemiBold";
    color: var(--white);
}
}
.hero_img{
    max-width: 900px;
    width:100%;
    height: 600px;
    margin:0 auto;
    border: 2px solid var(--gray-1);
}
.hero_info
{
    margin-top:-18rem;
}

.hero_social,
.hero_scrolldown
{
display: flex;
flex-direction: column;
gap: 2rem;
position: absolute;
bottom: 20px;
width:50px;
}
.hero_social{
    left:50px;
}
.hero_scrolldown{
    right:50px;
}

.hero_social_indicator,
.hero_scrolldown{
width: 50px;
p {
    font-size: 1.6rem;
    transform: translateY(-70px) rotate(90deg);
}
img{
    max-height: 45px;
    width:16px;
    margin:0 auto;
    object-fit: contain;
}
}
.hero_scrolldown{
    img{
        max-height: 70px;
    }
}

.hero_social_text{
    ul{
        li{
            margin-bottom: 1rem;
        }
        a{
            display: inline-block;
            font-size: 1.6rem;
            letter-spacing :5px ;
            margin-bottom: 2rem;
            transform:  rotate(90deg);
        }
        }
    }
    @media only screen and (max-width: 768px){
.hero{
    min-height: 750px;
}
.hero_heading{
    font-size: 1.4rem;
    margin-bottom: -3rem;
    .hero_name{
        font-size: 4.5rem;
    }
}
.hero_img{
height: 300px;
}
.hero_info{
margin-top: 3rem;
}
.hero_social{
left: 0px;
bottom:-15%;
width: 20px;
.hero_social_indicator{
width:20px;
p{
    font-size: 1.2rem;
}
img{
    max-height: 22px;
}
}
.hero_social_text{
ul{
    li{
        a{
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
    }
}
}
}
.hero_scrolldown{
right:0;
width: 20px;
gap:1rem;
p{
font-size: 1.3rem;
}
}
    }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
        <div className="hero">
      <div className="container">
        <h1 className="hero_heading">
          <span >Hello, This is</span>
          <span className="hero_name">Aman Dixit</span>
        </h1>
        <div className="hero_img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero_info">
          <PText>
            I am a college student. I love reading books. I want to be a web
            designer in future. I also do Cp as i like problem solving and
            stuff.
          </PText>
          <Buttons btnLink="/projects"
           btnText ="See my works" outline={false}/>
        </div>
        <div className="hero_social">
<div className="hero_social_indicator">
    <p>Follow</p>
<img src={SocialMediaArrow} alt=""></img>
</div>
<div className="hero_social_text">
    <ul>
       <li>
           <a href="https://www.linkedin.com/in/aman-dikshit/" target="_blank" rel="norefrence">
               LI
           </a>
           </li> 
           <li>
           <a href="https://www.linkedin.com/in/aman-dikshit/" target="_blank" rel="norefrence">
               IN
           </a>
           </li>  
    </ul>

</div>
        </div>
        <div className="hero_scrolldown">
            <p>Scroll</p>
         <img src={ScrollDownArrow} alt=""></img>
        </div>
      </div>
      </div>
    </HeroStyle>
  );
}
