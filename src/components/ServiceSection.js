/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import {MdDesktopMac, MdCode, MdPhonelinkSetup} from 'react-icons/md';
import SectionTitle from './SectionTitle'
import ServicesSectionItems from './ServicesSectionItems'

const ServicesItemStyles=styled.div`
padding: 10rem 0;
.services-allItems{
display: flex;
    gap:10rem;
    justify-content: space-between;
    margin-top: 5rem;
}
@media only screen and (max-width: 768px)
{

    .services-allItems
    {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
    }
}
`;
export default function ServiceSection() {
    return (
        <ServicesItemStyles>
            <div className="container">
            <SectionTitle heading="Services"
            subheading=" What i will do for you" />
<div className="services-allItems">
    <ServicesSectionItems icon={<MdDesktopMac />}
    title="Website Design"
    description="I sometimes do UI/UX design also"
    />
    <ServicesSectionItems
    icon={<MdCode />}
    title="Web Development"
    description="I create lightning speed websites with blazing high performance"
    />
    <ServicesSectionItems
    icon={<MdPhonelinkSetup/>}
    title="One-to-one Mentorship"
    description="I love problem sloving , i compete in various cp contest as well" />
</div>
</div>
        </ServicesItemStyles>
    );
}
