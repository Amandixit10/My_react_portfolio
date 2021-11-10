/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ColStyle=styled.div`
.heding{
    font-size: 2.4rem;
    margin-bottom:2rem;
}
li{
    margin-bottom:1rem;
}
a{
    font-size: 1.8rem; 
}
`;


export default function FooterCol({
    heading='col heading',
    links=[
        {
            type:'link',
            title:'Home',
            path:'/home'
        },
        {
            type:'link',
            title:'About',
            path:'/about'
        },
        {
            type:'link',
            title:'Projects',
            path:'/project'
        },
    ],
}) {
    return (
        <ColStyle>
          <h1 className="heading">{heading}</h1>
          <ul>
              {
links.map((item,index)=>(
    <li key={index}>
        {item.type==='Link'?(
            <Link to={item.path}>{item.title}</Link>
        ):
        (<a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
            )}
    </li>
    ))
}
          </ul>
        </ColStyle>
    );
}
