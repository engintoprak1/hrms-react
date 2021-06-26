import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Select } from 'semantic-ui-react'
import CityService from '../../services/cityService'
export default function AddJobAdvertisement() {
    const [cities, setCities] = useState([]);
    const workingTypes = [{ text: "Tam Zamanlı", key: 1, value: 1 },{text: "Yarı Zamanlı", key:0, value:0}]
    const workingTimes = [{ text: "Uzaktan", key: 1, value: 1 },{text: "Ofis", key:0, value:0}]

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(
            result.data.data.map((city) => {
                return { text: city.city, key: city.id, value: city.id }
            })
        ))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Şirket Adı</label>
                    <input placeholder='Şirket Adı Giriniz' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>

                <Form.Field>
                    <label>Şehirler</label>
                    <Select
                        options={cities}
                        placeholder="Şehir Seçiniz" />

                </Form.Field>

                <Form.Field>
                    <label>Çalışma Tipi</label>
                    <Select placeholder='Çalışma Tipi Seçiniz' options={workingTypes} />
                </Form.Field>

                <Form.Field>
                    <label>Çalışma Zamanı</label>
                    <Select placeholder='Çalışma Zamanı Seçiniz' options={workingTimes} />
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
