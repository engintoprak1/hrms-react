import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function ProfileSummary() {
    return (
        <div>
            <Dropdown item text="Profil">
              <Dropdown.Menu>
                <Dropdown.Item>Hesabım</Dropdown.Item>
                <Dropdown.Item>Cvlerim</Dropdown.Item>
                <Dropdown.Item>Ayarlar</Dropdown.Item>
                <Dropdown.Item>Çıkış Yap</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
