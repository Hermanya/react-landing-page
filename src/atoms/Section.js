import React from 'react'
import propTypes from 'prop-types'
import {
  Flex,
  Heading, Subhead} from 'rebass'

const Section = ({
  heading, subhead, subheadOpacity,
  children, ...props
}) =>
  <Flex
    py={[4, 5]}
    px={[1, 1, 2, 2, 3]}
    flexDirection='column'
    alignItems='center'
    {...props}>
    <Heading textAlign='center' mb={[1]}>
      {heading}
    </Heading>
    <Subhead textAlign='center' mb={[1, 2, 3, 4, 5]}
      style={{
        opacity: subheadOpacity
      }}>
      {subhead}
    </Subhead>
    {children}
  </Flex>

Section.propTypes = {
  heading: propTypes.string,
  subhead: propTypes.string,
  subheadOpacity: propTypes.number,
  children: propTypes.any
}
Section.defaultProps = {
  subheadOpacity: 0.5
}

export default Section
