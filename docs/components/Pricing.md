# PricingTier

```.jsx
<Heading textAlign="center">Pricing</Heading>
<Flex justifyContent="space-around">

    <PricingTier bg="silver"
        tierName="Basic"
        price="Free"
        billingType="forever"
        sellingPoints={[
            '🔥 Full feature set',
            '📑 Comprehensive docs'
        ]}>
        <CallToAction bg="black" width={1} mt="auto">Download</CallToAction>
    </PricingTier>

    <PricingTier bg="gold"
        tierName="Premium"
        price="$99"
        billingType="Yearly"
        sellingPoints={[
            '🔥 Full feature set',
            '📑 Comprehensive docs',
            '😌 Future updates',
            '👩‍⚖️ Commercial license'
        ]}>
        <CallToAction bg="black" width={1}>Buy now</CallToAction>
    </PricingTier>

</Flex>
```

Extends: [Flex](https://jxnblk.com/rebass/components/Flex)

| prop          | default   | type            |
| ------------- | --------- | --------------- |
| tierName      | 'Premium' | string          |
| price         | '$99'     | string          |
| billingType   | 'Yearly'  | string          |
| sellingPoints | []        | array of string |