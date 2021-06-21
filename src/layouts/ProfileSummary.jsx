import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import './ProfileSummary.css';

export default function ProfileSummary({signOut}) {
    return (
        <div>
          
            <Menu.Item className="no-divider" style={{padding:"0px"}}>
            <Image avatar src="https://media-exp3.licdn.com/dms/image/C4D03AQGJ-0T1fwF5iw/profile-displayphoto-shrink_100_100/0/1617024235975?e=1628121600&v=beta&t=K6qfhYDfv6ZdEuS98xMSijURY2KvBnfKYRqj8DuphGU" />
            <Dropdown pointing="top right" text="Engin">
                <Dropdown.Menu>
                  <Dropdown.Item text="Hesabım" icon="info"></Dropdown.Item>
                  <Dropdown.Item text="Cvlerim" icon="address card"></Dropdown.Item>
                  <Dropdown.Item text="Mesajlar" icon="envelope"></Dropdown.Item>
                  <Dropdown.Item text="Ayarlar" icon="settings"></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign out"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
        </div>
    )
}
