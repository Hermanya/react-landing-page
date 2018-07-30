import React from 'react'
import { Hero, Heading, Subhead, CallToAction,
  Phone, MacWindow, Laptop, Flex, ScrollDownIndicator} from '../src'

export default () => (<div>
  <Hero
    id='mobile-app-hero'
    color='white'
    bg='purple'
    backgroundImage='https://source.unsplash.com/CQB5J0hZC5U/1600x900'
  >
    <Flex flexWrap='wrap' alignItems='center'>
      <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
        <Heading>Mobile app Hero</Heading>
        <Subhead fontSize={[2, 3]}>2 Screenshots & Download links</Subhead>
        <CallToAction mt={3} onClick={
          () => document.querySelector('#web-app-hero').scrollIntoView({behavior: 'smooth'})
        }>Next Hero</CallToAction>
      </Flex>
      <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
        <Phone src='https://via.placeholder.com/187x406'
          notch style={{transform: 'translate(32px, 64px)'}} />
        <Phone src='https://via.placeholder.com/205x412' color='white'
          style={{transform: 'translate(-32px, 0px)'}} />
      </Flex>
    </Flex>
    <ScrollDownIndicator />
  </Hero>

  <Hero
    id='web-app-hero'
    color='white'
    bg='black'
    backgroundImage='https://source.unsplash.com/Kj2SaNHG-hg/1600x900'
  >
    <Flex flexWrap='wrap' alignItems='center'>
      <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
        <Heading>Web app Hero</Heading>
        <Subhead fontSize={[2, 3]}>Screenshot & Download link</Subhead>
        <CallToAction bg='grey' mt={3} onClick={
          () => document.querySelector('#laptop-app-hero').scrollIntoView({behavior: 'smooth'})
        }>Next Hero</CallToAction>
      </Flex>
      <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
        <MacWindow style={{transform: 'translate(32px, 0px)'}} />
        <Phone src='https://via.placeholder.com/187x406' color='black'
          style={{transform: 'translate(-32px, 64px)'}} />
      </Flex>
    </Flex>
    <ScrollDownIndicator />
  </Hero>

  <Hero
    id='laptop-app-hero'
    color='black'
    bg='pink'
  >
    <Heading>Laptop App Hero</Heading>
    <Subhead fontSize={[2, 3]}>Screenshot & Download link</Subhead>
    <CallToAction mt={3} bg='hotpink' onClick={
      () => document.querySelector('#basic-with-bg-image').scrollIntoView({behavior: 'smooth'})
    }>Next Hero</CallToAction>
    <Laptop mt={3} />
    <ScrollDownIndicator />
  </Hero>
  <Hero
    id='basic-with-bg-image'
    color='white'
    bg='black'
    backgroundImage='https://source.unsplash.com/mln2ExJIkfc/1600x900'
  >
    <Heading>Hero</Heading>
    <Subhead fontSize={[2, 3]}>background image & secondary action</Subhead>
    <Flex mt={3}>
      <CallToAction bg='grey' mr={3}>Secondary Action</CallToAction>
      <CallToAction onClick={
        () => document.querySelector('#basic-hero').scrollIntoView({behavior: 'smooth'})
      }>Next Hero</CallToAction>
    </Flex>
    <ScrollDownIndicator />
  </Hero>
  <Hero
    id='basic-hero'
    color='black'
    bg='white'
  >
    <Heading>Hero</Heading>
    <Subhead fontSize={[2, 3]}>bare essentials</Subhead>
    <CallToAction mt={3}>GitHub</CallToAction>
  </Hero>
</div>)
