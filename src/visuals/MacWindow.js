import React from 'react'
import { Box, Image, Dot } from 'rebass'
import styled from 'styled-components'

const MacWindow = ({
  src='https://via.placeholder.com/640x480',
  style={},
  color="#fbfbfb",
  notch
}) => <Box bg={color} style={{
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    ...style}}>
  <Box pl={1} style={{
    background: 'linear-gradient(#ebebeb, #d5d5d5)',
    borderBottom: '1px solid #b1aeb1',
  }}>
      <Dot/>
      <Dot/>
      <Dot/>
  </Box>
  <Image src={src}/>
</Box>


MacWindow.displayName = 'MacWindow'

export default MacWindow
