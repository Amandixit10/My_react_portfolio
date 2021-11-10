/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from'react-router-dom';
import styled from 'styled-components';
import projectImg from'../assets/images/projectImg.png';


const ProjectItemStyle = styled.div`
.projectItem_img {
    width :100%;
    height: 400px;
   overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border:3px solid var(--gray-2);
    img{
        height: 100%;
    }
}
.projectItem__info{
    margin-top: 1rem;
background-color: var(--deep-dark);
padding: 1rem;
border-radius: 12px;
}
.projectItem__title{
    font-size: 1.6rem;
}
.projectItem__desc{
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
}
@media only screen and ( max-width: 768px)
{
    .projectItem__img{
        height:350px;  
    }
}
` ;
export default function ProjectItems({
    img=projectImg,
    title='project Name',
    desc='loren ipsum khullar', 
}) {
    return (
        <ProjectItemStyle>
        <Link to="/projects" className="projectItem_img">
        <img src={img} alt="this is an image" /> 
        </Link>
        <div className="projectItem__info">
            <Link to="#">
                <h3 className="projectItem__title">{title}</h3>
            </Link>
            <p className="projectItem__desc">
               {desc}
            </p>
        </div>
        </ProjectItemStyle>
    );
}
