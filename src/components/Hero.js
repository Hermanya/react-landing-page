import React from 'react'
import { Absolute, Relative, Image, Flex } from 'rebass'
import propTypes from 'prop-types'

const Hero = ({
  bg,
  backgroundImage,
  bgOpacity,
  style = {},
  children,
  ...props
}) => <Relative>
  {backgroundImage && <Absolute
    top={0} right={0} bottom={0} left={0} zIndex={-2}
    style={{height: '100%'}}>
    <Image src={backgroundImage} alt='' width={1} style={{height: '100%', objectFit: 'cover'}} />
  </Absolute>}
  <Absolute
    top={0} right={0} bottom={0} left={0} zIndex={-1}
    bg={bg} style={{opacity: backgroundImage ? bgOpacity : 1, height: '100%'}} />
  <Flex style={{
    minHeight: '100vh',
    ...style
  }} {...props}>
    {children}
  </Flex>
</Relative>

Hero.displayName = 'Hero'
Hero.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  bgOpacity: 0.9
}
Hero.propTypes = {
  bg: propTypes.string,
  backgroundImage: propTypes.string,
  bgOpacity: propTypes.number,
  style: propTypes.object,
  children: propTypes.any
}
export default Hero
