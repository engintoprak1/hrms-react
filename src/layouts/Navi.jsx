import React from 'react'
import Fav from './Fav'
import { Button, Menu, Container, Dropdown } from 'semantic-ui-react'
import ProfileSummary from './ProfileSummary'

export default function Navi() {

    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item name='Dashboard'></Menu.Item>

                    <Menu.Menu>
                        <Fav></Fav>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button positive className='margin-right'>Sign Up</Button>
                            <Button positive className='margin-right'>Sign In</Button>
                            <Button primary content='Employer' icon='right arrow' labelPosition='right' />
                        </Menu.Item>
                        <Menu.Menu>
                            <ProfileSummary></ProfileSummary>
                        </Menu.Menu>

                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}

