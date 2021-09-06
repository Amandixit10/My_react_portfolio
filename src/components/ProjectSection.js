/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Swiper, SwiperSlide} from'swiper/react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectItems from './ProjectItems';

const ProjectSectionStyle=styled.div`

padding: 10rem 0;
.projects-allItems{
    display: flex;
    gap: 3rem;
    margin-top:5rem;
}
.swiper-container{
    padding-top: 8rem;
    max-width: 100%;
}
`;
export default function ProjectSection() {
    return (
        <ProjectSectionStyle>
        <div className="container">
            <SectionTitle heading="Projects"
            subheading="Some of my recent projects" />
       
       <div className="projects-allItems">

           <Swiper
               spaceBetween={30}
               slidesPerView={2}
               navigation
               >
{projects.map((project,index)=>{
    if(index>=3)
    {
        return;
    }
    return(

 <ProjectItems /> 
    );
})}
           </Swiper>
       </div>
        </div>
        </ProjectSectionStyle>
    );
}
