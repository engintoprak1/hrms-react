import React from 'react'
import Fav from './Fav'
import { Button, Menu, Container, Dropdown } from 'semantic-ui-react'

export default function Navi() {

    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item name='browse'>
                        Homepage
                    </Menu.Item>

                    <Menu.Menu>
                        <Fav></Fav>
                    </Menu.Menu>

                    <Menu.Menu position='right'>

                        <Dropdown item text='Employer'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Sign In</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item name='signup'>
                            <Button positive>Sign Up</Button>
                        </Menu.Item>

                        <Menu.Item name='signin'>
                            <Button positive>Sign In</Button>
                        </Menu.Item>

                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}

