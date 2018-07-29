import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
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

const header = <Absolute zIndex={1} left={0} right={0} top={0}>
    <Flex p={3}>
        <NavLink
            is={RouterLink}
            to="/"
            fontSize={3}
        >react-landing-page</NavLink>
        <NavLink href={githubLink} ml='auto'>GitHub</NavLink>
        <NavLink href={npmLink}>NPM</NavLink>
    </Flex>
</Absolute>

const footer = <Flex is="footer" p={3}>
    <NavLink
        is={RouterLink}
        children="Documentation"
        to="/getting-started"/>
    <NavLink children="GitHub" href={githubLink}/>
    <NavLink children="NPM" href={npmLink}/>
    <Box color="grey" ml="auto">MIT © Herman Starikov</Box>
</Flex>

const Section = ({heading, subhead, children, ...props}) => <Flex
    width={[1, 1/2, 1/2, 1/4, 1/4]}
    py={[1, 2, 3, 4, 5]}
    px={[1, 1, 2, 2, 3]}
    flexDirection="column"
    alignItems="center"
    {...props}>
    <Heading textAlign="center" mb={[1, 1, 2, 2, 3]}>{heading}</Heading>
    <Subhead textAlign="center" mb={[1, 2, 3, 4, 5]}>{subhead}</Subhead>
    {children}
</Flex>

const LandingPage = () => <main>
    {header}
    <Hero
        color="black"
        bg="white"
        backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Flex flexWrap='wrap' alignItems='center'>
            <Flex alignItems="flex-start" width={[1, 1, 1/2]} p={3}>
                <MacWindow style={{transform: 'translate(32px, 0px)'}}/>
                <Phone src="https://via.placeholder.com/187x406" color="black"
                    style={{transform: 'translate(-32px, 32px)'}}/>
            </Flex>
            <Box width={[1, 1, 1/2]} p={3} >
                <Heading textAlign="center">React components for a Landing Page</Heading>
                <Subhead textAlign="center">tailored to your app & users</Subhead>
                <Flex mt={3} flexWrap="wrap" justifyContent="center">
                    <CallToAction
                        is={RouterLink}
                        to="/getting-started"
                        mr={3}
                    >Documentation</CallToAction>
                    <Pre p={3}>npm i react-landing-page@next</Pre>
                </Flex>
            </Box>
        </Flex>
        <ScrollDownIndicator/>
    </Hero>
    <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">

        <Section heading="What's included?" width={1}>
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
        </Section>

        <Section
            heading="Why pick this library?"
            subhead="maybe this will help">
            <Checklist children={[
                'Open Source',
                'React best practices',
                'Practical API'
            ]}/>
        </Section>

        <Section
            heading="What people say?">
            <Flex alignItems="flex-end" justifyContent="space-around">
                <Testimony
                    authorAvatar="https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=ByDJmdnXciGKEyYXdfj4mA7WNEXCvTWhGfbFm4imqyI"
                    authorName="Herman Starikov"
                    authorTitle="maintainer">
                    Use react-landing-page for your landing page needs. Or do not, I am not a beggar...
                </Testimony>
            </Flex>
        </Section>

        <Section heading="Made by">
            <Flex justifyContent="space-around">
                <Contributor
                    fullName="Herman Starikov"
                    title="maintainer"
                    avatar="https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=ByDJmdnXciGKEyYXdfj4mA7WNEXCvTWhGfbFm4imqyI"
                    >
                    <Flex flexWrap="wrap">
                        <NavLink href='https://github.com/Hermanya'>GitHub</NavLink>
                        <NavLink href='https://www.linkedin.com/in/hermanstarikov/'>LinkedIn</NavLink>
                    </Flex>
                </Contributor>
            </Flex>
        </Section>

        <Section
            heading="Install from npm"
            subhead="and head over to documentation"
            width={[1, 1/2, 2/3, 2/4]}>
                <Pre p={3}>npm i react-landing-page@next</Pre>
                <CallToAction
                    is={RouterLink}
                    to="/getting-started"
                >Documentation</CallToAction>
        </Section>

    </Flex>
    {footer}
</main>

LandingPage.defaultProps = {
  layout: false
}
export default LandingPage