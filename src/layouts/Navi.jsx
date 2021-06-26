import React, { useState } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from '../pages/SignedOut'
import SignedIn from '../pages/SignedIn'
import Fav from './Fav'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export default function Navi(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }


    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item> <img alt="logo" src="https://image.flaticon.com/icons/png/512/271/271310.png" /> </Menu.Item>
                    <Menu.Item as={NavLink} to="/homePage" name='Ana Sayfa'></Menu.Item>
                    {isAuthenticated && <Menu.Item name={"İş ilanı ekle"} as={NavLink} to={`/addJobAdvertisement`}></Menu.Item>}
                    {isAuthenticated && <Fav />}
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}

