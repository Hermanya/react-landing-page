import React from 'react'
import {
  Blockquote, Lead, Text, Avatar, Flex, Box, Arrow, Absolute, Relative
} from 'rebass'
import propTypes from 'prop-types'

const Testimony = ({
  authorAvatar,
  authorName,
  authorTitle,
  children,
  bubbleBg,
  bubbleColor,
  ...props
}) => <Flex flexDirection='column' alignItems='center' {...props}>
  {typeof children === 'string'
    ? <Relative>
      <Blockquote bg={bubbleBg} color={bubbleColor} mb={3} p={3}>
        {children}
        <Absolute
          bottom={4}
          left={24}
        ><Arrow color={bubbleBg} /></Absolute>
      </Blockquote>
    </Relative>
    : children
  }
  <Flex alignItems='center' width={1}>
    <Avatar src={authorAvatar} size={64} mr={3} alt='' />
    <Box>
      <Lead>{authorName}</Lead>
      <Text style={{opacity: 3 / 4}}>{authorTitle}</Text>
    </Box>
  </Flex>
</Flex>

Testimony.defaultProps = {
  authorAvatar: 'https://via.placeholder.com/64x64',
  authorName: 'Anonymous',
  authorTitle: 'expert',
  bubbleBg: 'whitesmoke',
  bubbleColor: 'black'
}
Testimony.propTypes = {
  authorAvatar: propTypes.string,
  authorName: propTypes.string,
  authorTitle: propTypes.string,
  bubbleBg: propTypes.string,
  bubbleColor: propTypes.string,
  children: propTypes.any
}

export default Testimony
