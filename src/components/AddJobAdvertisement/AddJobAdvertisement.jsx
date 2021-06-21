import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Select, Label } from 'semantic-ui-react'
import CityService from '../../services/cityService'
export default function AddJobAdvertisement() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(
            result.data.data.map((city) => {
                return { text: city.city, key: city.id, value: city.id }
            })
        ));
        console.log(cities)
    }, [])
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>

                <Form.Field>
                    <label>Şehir Seçiniz</label>
                    <Select
                        options={cities}
                        placeholder="Şehirler" />

                </Form.Field>

                <Form.Field label='İş Açıklaması' control='textarea' rows='3' />

                
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
