/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { CSSTransition,SwitchTransition } from 'react-transition-group';
import styled from 'styled-components'
import PText from './PText'
import SectionTitle from './SectionTitle'
import testimonials from '../assets/data/testimonials';
import { useState } from 'react';

const TestimonialSectionStyles=styled.div`
padding:10rem ;
text-align: center;
.testtimonial__wrapper{
    position:relative;
    max-width: 700px;
    margin: 0 auto;
}
.testimonial__info{
width:100%;
height: fit-content;
padding:3rem;
background-color: var(--deep-dark);
border-radius: 12px;
margin-top: 5rem;
}
.testimonial___desc{
    .para{
        text-align:center;
    }
}
.testimonial__name{
    margin-top: 4rem;
    font-family:'Montserrat Bold';
    font-size:2.2rem;
}
.testimonial__title{
    font-size: 1.6rem;
    margin-top:0.3rem;
} 
.arrows{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        width: 30px;
        pointer-events:none;
    }
    .next,.prev{
margin: 0 0.5rem;
width: fit-content;
background-color: var(--deep-dark);
padding: 0.5rem 2rem;
border-radius: 8px;
cursor: pointer;
    }
}
.fade-enter{
    opacity: 0;
    transform: scale(0.96);
}
.fade-enter-active{
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in opacity;
}
.fade-exit{
    opacity: 0;
    transform: scale(1);
}
.fade-exit-active{
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in opacity;
}
`;

export default function TestimonialSection() {
const [actveIndex, setactveIndex] = useState(0);
    const activeSlide = testimonials[actveIndex];
    function handlePrev()
        {
     if(actveIndex<=0)
     {
setactveIndex(testimonials.length-1)
     }
     else{
        setactveIndex((oldIndex)=> oldIndex-1); 
     }
    }
    function handleNext(){
        if(actveIndex>=testimonials.length-1)
        {
            setactveIndex(0);
        }
        else{
            setactveIndex((oldIndex)=> oldIndex+1);
        }
    }
    // eslint-disable-next-line prettier/prettier
    return (
        <TestimonialSectionStyles>
          <div className="container">
 <SectionTitle heading="Testimonial" subheading="See what our clients say about us"/>  
 <div className="testimonial__wrapper">
   <SwitchTransition>
         <CSSTransition
             key={activeSlide.id}
             timeout={300}
             classNames="fade"
             >
        <div className="testimonial__info">
         <div className="testimonial__desc">
             <PText> {activeSlide.desc}
                 </PText>   
        </div>
        <h2 className="testimonial__name">{activeSlide.name}</h2>
        <p className="testimonial__title">{activeSlide.title},<br/>{activeSlide.org}</p>
        </div>
         </CSSTransition>
     </SwitchTransition>
 </div>
 <div className="arrows">
     <div className="prev" 
     onClick={handlePrev}
     role="button"
     tabIndex={0}
     onKeyDown={handlePrev}
     >
         <MdArrowBack/>
     </div>
     <div className="next"
     onClick={handleNext}
     role="button"
     tabIndex={0}
     onKeyDown={handleNext}>
         <MdArrowForward/>
     </div>
 </div>

              </div> 
        </TestimonialSectionStyles>
    )
}
