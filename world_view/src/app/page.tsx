'use client'
import NavBar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { fetchAllCountries } from '../services/Countries/CountriesService'
import Card from '@/components/Countrysplay'

export default function Home() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetchAllCountries().then((response) => {
            setCountries(
                response.data.sort(
                    (
                        a: { name: { common: string } },
                        b: { name: { common: any } }
                    ) => a.name.common.localeCompare(b.name.common)
                )
            )
        })
    }, [])

    return (
        <>
            <NavBar title={'World View'} searchbar={false} />
            <div className="flex flex-wrap gap-6 justify-center m-6">
                {countries.map((country) => (
                    <Card
                        name={country.name.common}
                        flag={country.flags.png}
                        code={country.cca3}
                    />
                ))}
            </div>
        </>
    )
}
