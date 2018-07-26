import React from 'react'
import { Box, Image, Dot } from 'rebass'
import styled from 'styled-components'

const MacWindow = ({
  src='http://via.placeholder.com/640x480',
  style={},
  color="#fbfbfb",
  notch
}) => <Box bg={color} style={{borderRadius: 4, ...style}}>
  <Box p={1}>
      <Dot/>
      <Dot/>
      <Dot/>
  </Box>
  <Image src={src}/>
</Box>


MacWindow.displayName = 'MacWindow'

export default MacWindow
