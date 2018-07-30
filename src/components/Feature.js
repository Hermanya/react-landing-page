import React from 'react'
import { Lead, Heading, Text, Box } from 'rebass'
import propTypes from 'prop-types'
const Feature = ({
  icon,
  description,
  children,
  ...props
}) => <Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]} my={[1, 2, 3]} p={3} {...props}>
  <Heading textAlign='center' mb={3} fontSize={5}>{icon}</Heading>
  {typeof children === 'string'
    ? <Lead textAlign='center' fontWeight='bold' m={3}>{children}</Lead>
    : children}
  <Text textAlign='center' style={{opacity: 3 / 4}}>{description}</Text>
</Box>

Feature.displayName = 'Feature'
Feature.defaultProps = {
  icon: '🔥',
  children: 'Feature',
  description: 'description'
}
Feature.propTypes = {
  icon: propTypes.any,
  description: propTypes.string,
  children: propTypes.any
}
export default Feature
