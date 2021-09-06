/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import {MdDesktopMac} from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles =styled.div`
text-align:center;
.servicesItem-icon{
svg{
    width: 3rem;
}
}
.servicesItem-title{
    font-size:2.5rem;
    font-family: "Montserrat SemiBold";
}
.para{
margin-top: 2rem;
}
`;

export default function ServicesSectionItems({
    icon=<MdDesktopMac />,
    title='Web design',
    description="It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout. The point of using LoremIpsum is that it has a more-or-less normal distribution of letters, as opposed to using'Content here, content here', making it look like readable English.",
}) {
    return (
        <ItemStyles>
        <div className="servicesItem-icon">
            {icon}
            <div className='servicesItem-title'>
{title}</div>
<PText>
{description}
</PText>
        </div>
        </ItemStyles>
    );
}
