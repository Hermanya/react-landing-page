import React from 'react'
import { Blockquote, Lead, Text, Avatar, Flex, Box, Arrow, Absolute, Relative} from 'rebass'

const Testimony = ({
    authorAvatar,
    authorName,
    authorTitle,
    children,
    ...props
}) => <Flex width={[1, 1/2]} my={[1, 5]} p={3} flexDirection='column' alignItems="center" {...props}>
    {typeof children === 'string' ?
        <Relative>
            <Blockquote bg="whitesmoke" mb={3} p={3}>
                {children}
                <Absolute
                    bottom={4}
                    left={24}
                    ><Arrow color="whitesmoke"/></Absolute>
            </Blockquote>
        </Relative>
        : children
    }
    <Flex alignItems="center" width={1}>
        <Avatar src={authorAvatar} size={64} mr={3}/>
        <Box>
            <Lead>{authorName}</Lead>
            <Text style={{opacity: 3/4}}>{authorTitle}</Text>
        </Box>
    </Flex>
</Flex>

Testimony.defaultProps = {
    authorAvatar: 'http://via.placeholder.com/64x64',
    authorName: 'Anonymous',
    authorTitle: 'expert',
}

export default Testimony