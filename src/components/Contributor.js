import React from 'react'
import { Text, Lead, Avatar, Flex } from 'rebass'
import propTypes from 'prop-types'
const Contributor = ({
  avatar,
  fullName,
  title,
  children,
  ...props
}) => <Flex flexDirection='column' alignItems='center' {...props}>
  <Avatar src={avatar} size={128} alt='' />
  <Lead textAlign='center' m={3}>{fullName}</Lead>
  <Text textAlign='center' mb={3} style={{opacity: 3 / 4}}>{title}</Text>
  {children}
</Flex>

Contributor.propTypes = {
  avatar: propTypes.string,
  fullName: propTypes.string,
  title: propTypes.string,
  children: propTypes.any
}

export default Contributor
