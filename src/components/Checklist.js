import React from 'react'
import { Lead, Flex, Box } from 'rebass'
import propTypes from 'prop-types'
const Item = ({
  checkmark,
  text,
  last
}) => <Flex is='li' mt={[2]} mb={2} pb={3} alignItems='center' justifyContent='space-between'
  style={{ borderBottom: last ? 'none' : '1px solid rgba(128, 128, 128, 0.5)' }}>
  <Lead>{text}</Lead><Box ml={[2, 5]} fontSize={3}>{checkmark}</Box>
</Flex>

Item.propTypes = {
  checkmark: propTypes.any,
  text: propTypes.string,
  last: propTypes.bool
}

const Checklist = ({ checkmark, children, ...props }) =>
  <Flex is='ul'
    p={0} style={{ listStyle: 'none' }}
    flexDirection='column'
    {...props}>
    {children.map((item, index) =>
      <Item text={item} checkmark={checkmark}
        key={item}
        last={index + 1 === children.length} />)}
  </Flex>

Checklist.displayName = 'Checklist'
Checklist.defaultProps = {
  checkmark: '✅',
  children: []
}
Checklist.propTypes = {
  checkmark: propTypes.any,
  children: propTypes.any
}
export default Checklist
