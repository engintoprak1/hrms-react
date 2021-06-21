import React, {useState} from 'react'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import Fav from './Fav'
import { NavLink } from 'react-router-dom'

export default function Navi(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item name='Dashboard'></Menu.Item>
                    {isAuthenticated&&<Menu.Item name='Add Job Advertisement' as={NavLink} to={`/addJobAdvertisement`}></Menu.Item>}
                    {isAuthenticated&&<Fav />}
                    <Menu.Menu position='right'>
                        {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}

