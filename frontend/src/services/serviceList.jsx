import React from 'react';
import ServiceCard from './serviceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quis, dolor hic corrupti culpa odit, impedit reprehenderit vel ullam similique laborum est dolore! Voluptas quaerat omnis obcaecati sed saepe vel!"
    },
    {
        imgUrl:guideImg,
        title:"Best Tuor Guide",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quis, dolor hic corrupti culpa odit, impedit reprehenderit vel ullam similique laborum est dolore! Voluptas quaerat omnis obcaecati sed saepe vel!"
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quis, dolor hic corrupti culpa odit, impedit reprehenderit vel ullam similique laborum est dolore! Voluptas quaerat omnis obcaecati sed saepe vel!"
    }
]

const serviceList = () => {
  return (
    <>
      {servicesData.map((item,index)=>(
        <Col lg="3" md="6" sm="12" className="nb-4" key={index}>
            <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default serviceList;
