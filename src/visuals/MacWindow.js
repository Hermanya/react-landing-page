import React from 'react'
import { Box, Image, Dot } from 'rebass'
import propTypes from 'prop-types'

const MacWindow = ({
  style = {},
  color = '#fbfbfb',
  src = 'https://via.placeholder.com/640x480',
  children,
  ...props
}) => <Box bg={color}
  style={{
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    ...style
  }}
  {...props}>
  <Box pl={1} style={{
    background: 'linear-gradient(#ebebeb, #d5d5d5)',
    borderBottom: '1px solid #b1aeb1'
  }}>
    <Dot />
    <Dot />
    <Dot />
  </Box>
  {src ? <Image src={src} /> : children}
</Box>

MacWindow.displayName = 'MacWindow'
MacWindow.propTypes = {
  src: propTypes.string,
  style: propTypes.object,
  color: propTypes.string,
  children: propTypes.any
}
export default MacWindow
