# Hero

```.jsx
<Hero
    color='white'
    bg='purple'
    backgroundImage='https://source.unsplash.com/CQB5J0hZC5U/1600x900'
>
    <Flex flexWrap='wrap' alignItems='center'>
        <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
            <Phone src='https://via.placeholder.com/187x406'
                notch style={{transform: 'translate(32px, 64px)'}} />
            <Phone src='https://via.placeholder.com/205x412' color='white'
                style={{transform: 'translate(-32px, 0px)'}} />
        </Flex>
        <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
            <Heading>Mobile App Hero</Heading>
            <Subhead fontSize={[2, 3]}>2 Screenshots & links</Subhead>
            <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                <CallToAction bg="black" mb={2}> App store</CallToAction>
                <CallToAction bg="black">Google Play</CallToAction>
            </Flex>
        </Flex>
    </Flex>
    <ScrollDownIndicator />
</Hero>
```

```.jsx
<Hero
    bg='white'
    bgOpacity={0.5}
    backgroundImage='https://source.unsplash.com/Kj2SaNHG-hg/1600x900'
>
    <Flex flexWrap='wrap' alignItems='center'>
        <Flex alignItems='flex-start' width={[1, 1, 1 / 2]} p={3}>
            <MacWindow style={{transform: 'translate(32px, 0px)'}}
                src='https://via.placeholder.com/640x480' />
            <Phone color='black'
                style={{transform: 'translate(-32px, 32px)'}}
                src='https://via.placeholder.com/187x406' />
        </Flex>
        <Box width={[1, 1, 1 / 2]} p={3} >
            <Heading textAlign='center'>Web app Hero</Heading>
            <Subhead textAlign='center'>Screenshot & Link</Subhead>
            <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                <CallToAction
                    href='/getting-started'
                    mr={3}
                >Visit</CallToAction>
            </Flex>
        </Box>
    </Flex>
    <ScrollDownIndicator />
</Hero>
```

```.jsx
<Hero
    color='black'
    bg='white'
    backgroundImage='https://source.unsplash.com/jxaj-UrzQbc/1600x900'
>
    <Flex flexWrap='wrap' alignItems='center'>
        <Flex alignItems='flex-start' width={[1, 1, 1 / 2]} p={3}>
        <MacWindow style={{transform: 'translate(32px, 0px)'}}
            src='https://user-images.githubusercontent.com/2906365/43374115-fdd689e4-937b-11e8-8340-d07ef5b5cea3.png' />
        <Phone color='black'
            style={{transform: 'translate(-32px, 32px)'}}
            src='https://user-images.githubusercontent.com/2906365/43362296-f0c27c9e-92b4-11e8-9776-604cc42b23b5.png' />
        </Flex>
        <Box width={[1, 1, 1 / 2]} p={3} >
        <Heading textAlign='center'>React components for a Landing Page</Heading>
        <Subhead textAlign='center'>tailored to your app & users</Subhead>
        <Flex mt={3} flexWrap='wrap' justifyContent='center'>
            <CallToAction
                href='/getting-started'
                mr={3}
            >Documentation</CallToAction>
            <Pre p={3}>npm i react-landing-page@next</Pre>
        </Flex>
        </Box>
    </Flex>
    <ScrollDownIndicator />
</Hero>
```

```.jsx
<Hero>
    <Heading>Basic Hero</Heading>
    <Subhead>a couple more words</Subhead>
    <CallToAction href="/getting-started" mt={3}>Get started</CallToAction>
    <ScrollDownIndicator/>
</Hero>
```

```.jsx
<Hero
    color='white'
    backgroundImage='https://source.unsplash.com/Vwf8q3RzBRE/1600x900'
    bg='black'
    bgOpacity={0.5}
  >
    <Heading>Hero with a background image</Heading>
    <Subhead fontSize={[2, 3]}>background image & secondary action</Subhead>
    <Flex mt={3}>
        <CallToAction bg='grey' mr={3}>Secondary Action</CallToAction>
        <CallToAction>Primary Action</CallToAction>
    </Flex>
    <ScrollDownIndicator />
</Hero>
```

```.jsx
<Hero
color='black'
bg='pink'
>
    <Heading>Laptop App Hero</Heading>
    <Subhead fontSize={[2, 3]}>Screenshot & Download link</Subhead>
    <CallToAction mt={3} bg='hotpink'>Next Hero</CallToAction>
    <Laptop mt={3} />
    <ScrollDownIndicator />
</Hero>
```

Extends: [Flex](https://jxnblk.com/rebass/components/Flex)

| prop            | default         | type               |
| --------------- | --------------- | ------------------ |
| backgroundImage | undefined       | url                |
| bgOpacity       | image ? 0.9 : 1 | number from 0 to 1 |