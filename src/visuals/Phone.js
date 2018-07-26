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
  src='http://via.placeholder.com/187x406',
  style={},
  color="grey",
  notch
}) => <Box bg={color} px={8} py={notch? 8 : 24} style={{borderRadius: 20, position: 'relative', ...style}}>
  {notch && <Notch bg={color}/>}
  <Image src={src} style={{borderRadius: 16}}/>
</Box>


Phone.displayName = 'Phone'

export default Phone
