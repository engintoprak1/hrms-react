import React from 'react'
import {Dropdown} from 'semantic-ui-react'

export default function Fav() {
    return (
        <div>
            <Dropdown item text='Favorites'>
                <Dropdown.Menu>
                    <Dropdown.Item>İlan 1</Dropdown.Item>
                    <Dropdown.Item>İlan 2</Dropdown.Item>
                    <Dropdown.Item>İlan 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
