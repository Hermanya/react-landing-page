import React from 'react'
import { Text, Lead, Subhead, Heading, Avatar, Column, Flex, Box, Row, Link, ButtonOutline } from 'rebass'

const PricingTier = ({
    tierName,
    price,
    billingType,
    sellingPoints,
    children,
    ...props
}) => <Flex flexDirection="column" width={[1, 1/2, 1/3]} my={[1, 2, 3]} p={[1, 2, 3]} {...props}>
    <Lead>{tierName}</Lead>
    <Flex alignItems="flex-end" my={[2]}>
        <Text fontSize={6} fontWeight="bold">{price}</Text>
        <Text style={{opacity: 3/4}} m={2}>{billingType}</Text>
    </Flex>
    {sellingPoints.map(point => <Text mb={2} key={point}>{point}</Text>)}
    {children}
</Flex>

PricingTier.defaultProps = ({
    name: 'Premium',
    price: '$99',
    billingType: 'yearly',
    sellingPoints: []
})

export default PricingTier