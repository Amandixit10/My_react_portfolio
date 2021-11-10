/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components';
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyles=styled.div`
padding-top: 10rem;
background-color: var(--deep-dark);
.container{
    display: flex;
    gap: 3rem;
}
.footer__col1{
    flex:2;
}
.footer__col2.footer_col3,.footer_col3,.footer__col4{
    flex:1;
}
.footer___col1__title{
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
.copyright{
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para{
        margin-left: 0;
    }
}
@media only screen and (max-width: 768px)
{
    .container{
        flex-direction: column;
        gap: 0rem;
        & > div{
            margin-top: 5rem;
        }
    }
    .footer__col1 .para{
     max-width: 100%;   
    }
    .copyright{
        .container{
            div{
                margin-top: 0;
            }
        }
    }
}
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
           <div className="footer__col1">
               <h1 className="footer__col1__title">Aman dixit</h1>
               <PText>I am a freelancer , oh boi ....</PText>
               </div>
               <div classNamse="footer__col2"><FooterCol heading="Important Links"
               links={[
                   {
                       title:'Home',
                       path:'/',
                       type:'Link'
                   },
                {
                    title:'About',
                    path:'/about',
                    type:'Link'
                },
                {
                    title:'Projects',
                    path:'/projects',
                    type:'Link'
                },
                {
                    title:'Contact',
                    path:'/contact',
                    type:'Link'
                }
               ]
            }
               /></div> 
               <div classNamse="footer__col3"><FooterCol
               heading="Contact Info"
                links={[
                    {
                        title:'+91-9894356782',

                    },
                 {
                     title:'Ghaziabad',
                     
                 },
                 {
                    title:'Amandikshit10@gmail.com'
                    
                },
                ]
             }
               
               /></div> 
               <div classNamse="footer__col4"><FooterCol
               heading="Social Links"
                links={[
                    {
                        title:'Linkedin',
    
                        path:'https://www.linkedin.com/in/aman-dikshit/'
                    },
                 {
                     title:'Instagram',
                    
                    path:'https://www.instagram.com/amandixit195/'
                 },
                 {
                     title:'Github',
                    
                     path:'https://github.com/Amandixit10'
                 },

                ]
             }
               /></div>
               </div> 
               <div className="copyright">
               <div className="container">
                   <PText>© 2021 - Aman Dixit | Designed By Aman Dixit</PText>
               </div>
               </div>
        </FooterStyles> 
    )
}
