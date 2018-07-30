import React from 'react'
import { Box, Image } from 'rebass'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Keyboard = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -18px;
  width: calc(100% + 64px);
  height: 18px;
  border-radius: 2px;
  background: grey;
`
const KeyboardNotch = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -8px;
  width: 100px;
  height: 8px;
  background: #333;
`

const Laptop = ({
  src = 'https://via.placeholder.com/640x400',
  style = {},
  children,
  ...props
}) => <Box bg={'black'} p={3} style={{
  borderRadius: 4,
  border: '1px solid grey',
  position: 'relative',
  transform: 'scale(0.8)',
  ...style
}} {...props}>
  {src ? <Image src={src} /> : children}
  <Keyboard />
  <KeyboardNotch />
</Box>

Laptop.displayName = 'Laptop'
Laptop.propTypes = {
  src: propTypes.string,
  style: propTypes.object,
  children: propTypes.any
}
export default Laptop
