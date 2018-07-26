import React from 'react'
import { Flex, Box, Label, Input, Button } from 'rebass'
import propTypes from 'prop-types'

class SignUp extends React.Component {
    state={email: ''}
    render() {
        return (
            <Flex is="form" {...this.props} onSubmit={this.onSubmit}>
                <Box>
                    <Label>Email Address</Label>
                    <Input
                        type="email"
                        value={this.state.email}
                        onChange={(event) => this.setState({
                            email: event.target.value
                        })} />
                </Box>
                <Button mt={3} ml={3}>Sign Up</Button>
            </Flex>
        );
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.email)
    }
}

SignUp.displayName = 'SignUp'
SignUp.propTypes = {
    onSubmit: propTypes.func.isRequired
}
export default SignUp


