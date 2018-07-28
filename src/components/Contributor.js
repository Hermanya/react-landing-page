import React from 'react'
import { Text, Lead, Subhead, Heading, Avatar, Column, Flex, Box, Row, Link, ButtonOutline } from 'rebass'

const Contributor = ({
    avatar,
    fullName,
    title,
    children,
    ...props
}) => <Flex flexDirection='column' alignItems="center" {...props}>
    <Avatar src={avatar} size={128}/>
    <Lead textAlign="center" m={3}>{fullName}</Lead>
    <Text textAlign="center" mb={3} style={{opacity: 3/4}}>{title}</Text>
    {children}
</Flex>

export default Contributor