import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import CategoryGrid from '../../components/CategoryCard/CategoryGrid'
import Banner1 from '../../components/Banners/Banner1'
import HomeAbout from '../../components/HomeAbout/HomeAbout'
import ChooseUs from '../../components/ChooseUs/ChooseUS'
import ContactUs from '../../components/ContactUs/ContactUs'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div  className='px-4 lg:px-8'>
        <HomeSectionCarousel  sectionName={"Featured Products"}/>
        <Banner1 BannerHead={"Explore New Collections"}/>
        <CategoryGrid sectionName1={"Categories"} />
        <HomeAbout />
        <ChooseUs ChooseHead={"Why Choose Us"}/>
        <ContactUs SecName={"Contact Us"} />
      </div>
    </div>
  )
}

export default HomePage;

