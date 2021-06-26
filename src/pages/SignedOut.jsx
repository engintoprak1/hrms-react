import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button positive className='margin-right'>Kayıt Ol</Button>
                <Button onClick={signIn} positive className='margin-right'>Giriş Yap</Button>
                <Button primary content='İş Veren' icon='right arrow' labelPosition='right' />
            </Menu.Item>
            
        </div>
    )
}
