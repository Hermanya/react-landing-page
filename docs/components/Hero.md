# Hero

```.jsx
<Hero
    color="black"
    bg="white"
    backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Flex flexWrap='wrap' alignItems='center'>
            <Flex alignItems="flex-start" width={[1, 1, 1/2]} p={3}>
                <MacWindow/>
            </Flex>
            <Box width={[1, 1, 1/2]} p={3} >
                <Heading>React components for a Landing Page</Heading>
                <Subhead>tailored to your app & users</Subhead>
                <Flex mt={3} flexWrap="wrap">
                    <CallToAction href="/getting-started" mr={3}>Documentation</CallToAction>
                    <Pre m={3}>npm i react-landing-page@next</Pre>
                </Flex>
            </Box>
        </Flex>
        <ScrollDownIndicator/>
    </Hero>
```

Extends: [Flex](https://jxnblk.com/rebass/components/Flex)

| prop            | default         | type               |
| --------------- | --------------- | ------------------ |
| backgroundImage | undefined       | url                |
| bgOpacity       | image ? 0.9 : 1 | number from 0 to 1 |