import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import Causes from './causes/Causes'
import Charity from "./charity/Charity"
import { causesData,communityCard,gallery,testimonial,volunteer,news} from '../../DummyData'
import Community from './community/Community'
import Gallery from './gallery/Gallery'
import Testimonial from './testimonial/Testimonial'
import Volunter from './volunteer/Volunter'
import Article from './article/Article'

const Homepages = () => {
  const [items, setitems] = useState(causesData)
  const [cards, setcards] = useState(communityCard)
  const [photos, setphotos] = useState(gallery)
  const [details, setdetails] = useState(testimonial)
  const [datas, setdatas] = useState(volunteer)
  const [blogs, setblogs] = useState(news)
  return (
    <>
    <Hero />
    <Charity />
    <Causes items={items}/>
    <Community cards={cards}/>
    <Gallery photos={photos}/>
    <Testimonial  details={details}/>
    <Volunter datas={datas}/>
    <Article blogs={blogs}/>
    </>
  )
}

export default Homepages