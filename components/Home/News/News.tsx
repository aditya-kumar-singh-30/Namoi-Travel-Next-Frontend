import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import NewsCard from './NewsCard';

const News = () => {
  return (
    <div className='pt-16 pb-16 '>
      <SectionHeading heading="Exciting Travel News for You" subHeading="Aaj tak, BBC, NewsNation, and etc"/>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20 ' >
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" >
            <NewsCard image='/images/n1.jpg' title="Top 10 place to visit in Australia" date="1 May 2025"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <NewsCard image='/images/n2.jpg' title="Top 10 place to visit in Bangladesh" date="20 May 2025"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <NewsCard image='/images/n3.jpg' title="Top 10 place to visit in America" date="22 May 2025"/>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <NewsCard image='/images/n4.jpg' title="Top 10 place to visit in Azerbaijan" date="30 October 2025"/>
        </div>
      </div>
    </div>
  );
}

export default News;
