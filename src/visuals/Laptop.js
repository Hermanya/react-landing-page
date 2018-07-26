import React from 'react'
import { Box, Image, Dot } from 'rebass'
import styled from 'styled-components'

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
  src='http://via.placeholder.com/640x400',
  style={},
  ...props
}) => <Box bg={'black'} p={3} style={{
    borderRadius: 4, border: '1px solid grey', position: 'relative', ...style
}} {...props}>
  <Image src={src}/>
  <Keyboard/>
  <KeyboardNotch/>
</Box>


Laptop.displayName = 'Laptop'

export default Laptop
