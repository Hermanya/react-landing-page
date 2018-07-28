import React from 'react'
import { Lead, Subhead, Heading, Flex, Box, Divider } from 'rebass'

const Item = ({
    checkmark,
    text
}) => <Flex is="li" mt={[1]} alignItems="center" justifyContent="space-between">
    <Lead>{text}</Lead><Box ml={[2, 5]} fontSize={3}>{checkmark}</Box>
</Flex>

const Checklist = ({checkmark, children, ...props}) =>
<Flex is="ul"
    p={0} style={{listStyle: 'none'}}
    flexDirection="column"
    {...props}>
    {children.map((item, index) => <React.Fragment key={item}>
        <Item text={item} checkmark={checkmark} />
        {index + 1 !== children.length && <Divider/>}
    </React.Fragment>)}
</Flex>

Checklist.displayName = 'Checklist'
Checklist.defaultProps = {
    checkmark: '✅',
    children: []
}
export default Checklist


