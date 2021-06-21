import React from 'react'
import {Dropdown} from 'semantic-ui-react'

export default function Fav() {
    return (
            <Dropdown pointing="top left" item text='Favorites'>
                <Dropdown.Menu>
                    <Dropdown.Item text="İlan1" icon="favorite"></Dropdown.Item>
                    <Dropdown.Item text="İlan2" icon="favorite"></Dropdown.Item>
                    <Dropdown.Item text="İlan3" icon="favorite"></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    )
}
