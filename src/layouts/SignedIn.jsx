import React from 'react'
import ProfileSummary from './ProfileSummary'
import { Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Menu>
                <Menu.Item>
                    <ProfileSummary signOut={signOut}></ProfileSummary>
                </Menu.Item>
            </Menu.Menu>

            

            
            
        </div>
    )
}
