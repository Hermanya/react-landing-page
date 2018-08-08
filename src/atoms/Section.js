import React from 'react'
import propTypes from 'prop-types'
import {
  Flex,
  Heading, Subhead} from 'rebass'

const Section = ({heading, subhead, children, ...props}) => <Flex
  width={[1, 1 / 2, 1 / 2, 1 / 4, 1 / 4]}
  py={[4, 5]}
  px={[1, 1, 2, 2, 3]}
  flexDirection='column'
  alignItems='center'
  {...props}>
  <Heading textAlign='center' mb={[1, 1, 2, 2, 3]}>{heading}</Heading>
  <Subhead textAlign='center' mb={[1, 2, 3, 4, 5]}>{subhead}</Subhead>
  {children}
</Flex>

Section.propTypes = {
  heading: propTypes.string,
  subhead: propTypes.string,
  children: propTypes.any
}

export default Section
