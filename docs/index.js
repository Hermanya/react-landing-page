import React from 'react'
import {
    Absolute, Flex, NavLink,
    Pre, Heading, Subhead, Box} from 'rebass'
import {
    Hero,
    CallToAction, ScrollDownIndicator, Phone, MacWindow,
    Feature, Testimony, Contributor,
    Checklist } from '../src'

const githubLink = 'https://github.com/Hermanya/react-landing-page'
const npmLink = 'https://www.npmjs.com/package/react-landing-page'

const LandingPage = () => <main>
    <Absolute zIndex={1} left={0} right={0} top={0}>
        <Flex p={3}>
            <NavLink href="/" fontSize={3}>react-landing-page</NavLink>
            <NavLink href={githubLink} ml='auto'>GitHub</NavLink>
            <NavLink href={npmLink}>NPM</NavLink>
        </Flex>
    </Absolute>
    <Hero
        color="black"
        bg="white"
        backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Flex flexWrap='wrap' alignItems='center'>
            <Flex alignItems="flex-start" width={[1, 1, 1/2]} p={3}>
                <MacWindow style={{transform: 'translate(32px, 0px)'}}/>
                <Phone src="https://via.placeholder.com/187x406" color="black"
                    style={{transform: 'translate(-32px, 64px)'}}/>
            </Flex>
            <Box width={[1, 1, 1/2]} p={3} >
                <Heading>React components for a Landing Page</Heading>
                <Subhead>tailored to your app & users</Subhead>
                <Flex mt={3}>
                    <CallToAction href="/getting-started" mr={3}>Documentation</CallToAction>
                    <Pre p={3}>npm i react-landing-page@next</Pre>
                </Flex>
            </Box>
        </Flex>
        <ScrollDownIndicator/>
    </Hero>
    <Heading textAlign="center" my={4}>What's inside?</Heading>
    <Flex flexWrap="wrap" justifyContent="center">
        <Feature icon="👋" description="What your users see first">Hero</Feature>
        <Feature icon="🔥" description="What your app can do">Features</Feature>
        <Feature icon="✅" description="What is worth mentioning">Checklist</Feature>
        <Feature icon="💼" description="What big names are behind">Company Logos</Feature>
        <Feature icon="🙎‍" description="What your other people say">Social Proof</Feature>
        <Feature icon="💳" description="How much you charge">Pricing</Feature>
        <Feature icon="📣" description="What should users do first">Call To Action</Feature>
        <Feature icon="📩" description="How to keep in touch">Sign Up</Feature>
        <Feature icon="👩‍💼" description="Who worked on the app">Team</Feature>
    </Flex>
    <Flex flexDirection="column" alignItems="center" p={[1, 2, 5]}>
        <Heading>Why pick this library?</Heading>
        <Subhead>maybe this will help</Subhead>
        <Checklist children={[
            'Open Source',
            'React best practices',
            'Practical API'
        ]}/>
    </Flex>

    <Heading textAlign="center">What people say?</Heading>
    <Flex alignItems="flex-end" justifyContent="space-around">
        <Testimony
            authorAvatar="https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=ByDJmdnXciGKEyYXdfj4mA7WNEXCvTWhGfbFm4imqyI"
            authorName="Herman Starikov"
            authorTitle="developer">
            Use react-landing-page for your landing page needs. Or do not, I am not a beggar...
        </Testimony>
    </Flex>

    <Flex flexDirection="column" alignItems="center" p={5}>
        <Heading>Install from npm</Heading>
        <Subhead>and head over to documentation</Subhead>
        <Flex mt={3}>
            <Pre p={3}>npm i react-landing-page@next</Pre>
            <CallToAction href="/getting-started">Documentation</CallToAction>
        </Flex>
    </Flex>

    <Heading textAlign="center">Made by</Heading>
    <Flex justifyContent="space-around">
        <Contributor
            fullName="Herman Starikov"
            title="developer"
            avatar="https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=ByDJmdnXciGKEyYXdfj4mA7WNEXCvTWhGfbFm4imqyI"
            >
            <Flex>
                <NavLink href='https://github.com/Hermanya'>GitHub</NavLink>
                <NavLink href='https://www.linkedin.com/in/hermanstarikov/'>LinkedIn</NavLink>
            </Flex>
        </Contributor>
    </Flex>

    <Flex is="footer" p={3}>
        <NavLink children="Documentation" href="/getting-started"/>
        <NavLink children="GitHub" href={githubLink}/>
        <NavLink children="NPM" href={npmLink}/>
        <Box color="grey" ml="auto">MIT © Herman Starikov</Box>
    </Flex>
</main>

LandingPage.defaultProps = {
  layout: false
}
export default LandingPage