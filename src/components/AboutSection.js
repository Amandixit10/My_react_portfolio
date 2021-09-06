/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import PText from './PText'
import SectionTitle from './SectionTitle'
import Buttons from './Buttons'
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle=styled.div`

padding: 10rem 0;
.container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align:left;
}
.aboutSection_left,
.aboutSection_right{
    flex: 1;
}
.section-title{
    text-align: left;
}
.para{
    margin-top: 2rem;
    margin-left: 0;
}
.aboutSection_buttons{
    display: flex;
    align-items: center;
    justify-content:flex-start ;
    gap: 2rem;
    margin-top: 2rem ;
}
@media only screen and (max-width: 950px)
{
.aboutSection_left{
flex: 4;
}
.aboutSection_right{
    flex:3;
}
}
@media only screen and (max-width: 768px)
{
.container{
    flex-direction: column;
    text-align: center;
}
.aboutSection_left,
.aboutSection_right{
    width: 100%;
}
.aboutSection_right{
    margin-top: 3rem;
}
.section-title{
    text-align: center;
}
p{
    margin: 0 auto;
    margin-top: 2rem;
}
.aboutSection_buttons{
    flex-direction: column;
    gap:0;
    .button-wrapper,
a{
    width: 100%;
text-align: center;
}
}
}
`;

export default function AboutSection() {
    return (
        <AboutSectionStyle>
           <div className="container">
             <div className="aboutSection_left">
                 <SectionTitle 
                 subheading="Let me introduce myself"
                 heading="About me"
                 />
                 <PText>
                    I am a college student , currently 
                    persuing my bachelor's in information technology. Beside 
                    this is enjoy photography and this automatically made me a keen traveler as well.  
                 </PText>
                 <div className="aboutSection_buttons">
                     <Buttons btnLink="/Projects" btnText="Works" outline={false} />
                     <Buttons btnLink="/About" btnText="Read More" outline={true} />
                 </div>
                 </div> 
                 <div className="aboutSection_right">
                     <img src={AboutImg} alt="This is a image"></img>
                     </div> 
           </div>
        </AboutSectionStyle>
    )
}
