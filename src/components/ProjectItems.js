/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from'react-router-dom';
import styled from 'styled-components';
import projectImg from'../assets/images/projectImg.png';

const ProjectItemStyles=styled.div` 
.projectItem-img{
    width: 100%;
    height: 400px;
overflow: hidden;
border-radius: 12px;
display: inline-block;
border: 3px solid var(--gray-2);
img{
    height: 100%;
}
}
.projectItem-info{
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
}
.projectItem-title{
    font-size:2.2rem;
}
.projectItem-desc
{
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top:1rem;
}
@media only screen and(max-width: 768 px)
{
    .projectItem-img{
        height: 350px;
    }
}
`;

export default function ProjectItems() {
    return (
        <ProjectItemStyles>
        <Link to="/projects" className="projectItem-img">
        <img src={projectImg} alt="this is an image"></img> 
            </Link>    
            <div className="projectItem-info">
            <Link to="#" >
           <h3 className="projectItem-title">Project1</h3> 
            </Link>
            <p className="projectItem-desc">loren injojndc j jwd cjnjwne</p>   
            </div>
        </ProjectItemStyles>
    );
}
