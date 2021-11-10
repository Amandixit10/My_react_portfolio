/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components';
import PText from '../components/PText'
import Buttons from '../components/Buttons';
import AboutImg from '../assets/images/about-page-img.png'
import AboutinfoItem from '../components/AboutinfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPageStyles=styled.div`
padding: 20rem 10rem 0;
.top-section{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
.left{
    flex: 3;
}
.right{
    flex:2;
}
.about__subheading{
  font-size: 2.2rem ;
  margin-bottom: 2rem;
  span{
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
  }
}
.about__heading{
    font-size: 3.6rem;
    margin-bottom: 3rem;
}
.about__info{
  margin-bottom: 4rem;
  .para{
      max-width: 100%;
  }
}
.right{
    img{
        border: 2px solid var(--gray-1);
    }
}
.about__info__items{
    margin-top: 15rem;
}
.about__info__item{
    margin-bottom: 10rem;
}
.about__info__heading{
    font-size: 3.6rem;
    text-transform: uppercase;
}
@media only screen and (max-width: 768px){
    padding: 10rem 0;
    .top-section{
        flex-direction: column;
        gap: 5rem;

    }
    .about__subheading{
        font-size: 1.8rem;
    }
    .about__heading{
        font-size:2.8rem;
    }
  .about__info__heading{
      font-size: 3rem;
  }  
}
`;

export default function About() {
    return (
        <><AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Aman Dixit</span>
                        </p>
                        <h2 className="about__heading">A freelance Web developer</h2>
                        <div className="about__info">
                            <PText>
                                I am a pre-final year student at GGSIPU, Delhi. Since my
                                childhood i love innovation and design. I always try to
                                think the science behind the working of every perticular
                                thing that the human race have deveoleped .
                                <br /> <br />
                                I started coding a bit late, in my sophomore year. I started
                                with basic DSA and then moved on to CP. I enjoyed problem
                                solving and in CP, there is time constraint so, thinking about
                                a solution in a limited period of time is even more exciting.
                            </PText>
                        </div>
                        <Buttons btnText="Download CV" btnLink="#" />
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="This is my img" />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">Education</h1>
                        <AboutinfoItem
                            title="School"
                            items={['Vivekanand School, Anand Vihar, Delhi']} />
                        <AboutinfoItem
                            title="College"
                            items={['Maharaja Agrasen Institute Of Technology']} />
                        <AboutinfoItem
                            title="Varsity"
                            items={['GGSIPU, Dwarka, Delhi']} />
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">My Skill</h1>
                        <AboutinfoItem
                            title="FrontEnd"
                            items={['HTML', 'JS', 'CSS', 'REACT']} />
                        <AboutinfoItem
                            title="BackEnd"
                            items={['NODE', 'EXPRESS', 'MONGODB']} />
                        <AboutinfoItem
                            title="Design"
                            items={['Photoshop', 'Figma', 'After Effects']} />
                    </div>
                </div>
            </div>
            <ContactBanner />
        </AboutPageStyles><Footer /></>
    )
}




