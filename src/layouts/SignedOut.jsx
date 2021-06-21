import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button positive className='margin-right'>Sign Up</Button>
                <Button onClick={signIn} positive className='margin-right'>Sign In</Button>
                <Button primary content='Employer' icon='right arrow' labelPosition='right' />
            </Menu.Item>
            
        </div>
    )
}
