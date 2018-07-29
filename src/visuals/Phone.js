import React from 'react'
import { Box, Image } from 'rebass'
import styled from 'styled-components'

const Notch = styled(Box)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
  width: 104px;
  height: 15px;
  border-radius: 8px;
`

const Phone = ({
  src='https://via.placeholder.com/187x406',
  style={},
  color="grey",
  notch,
  ...props
}) => <Box
  bg={color}
  px={'1%'}
  py={notch? 8 : '4%'}
  style={{
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.6), 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3)',
    borderRadius: 20, position: 'relative', ...style
  }}
  {...props}
  >
  {notch && <Notch bg={color}/>}
  <Image src={src} style={{borderRadius: 16}}/>
</Box>


Phone.displayName = 'Phone'

export default Phone
