'use client'
import NavBar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'
import { fetchCountriesbyCode } from '@/services/Countries/CountriesService'
import { useEffect } from 'react'

type Details = {
    name: {
        common: string
        official: string
        nativeName: {
            [key: string]: {
                common: string
                official: string
            }
        }
    }
    flags: {
        png: string
    }
    tld: string[]
    latlng: number[]
    area: number
    borders: string[]
    region: string
    subregion: string
    capital: string
    independent: boolean
    UN: boolean
    population: number
    demonyms: {
        eng: {
            f: string
            m: string
        }
        fra: {
            f: string
            m: string
        }
    }
    currencies: {
        [key: string]: {
            name: string
        }
    }
    gini: {
        [key: string]: number
    }
    languages: {
        [key: string]: string
    }
}
export default function detail({ params }: { params: { detail: string } }) {
    const detail = params.detail
    const [country, setCountry] = useState<Details>()

    useEffect(() => {
        fetchCountriesbyCode(detail)
            .then((response) => {
                setCountry(response.data[0])
                console.log(response.data[0])
            })
            .catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    console.error('This country does not exist')
                }
            })
    }, [])
    return (
        <>
            <NavBar title={'World View'} searchbar={false} />
            <div className="background">
                <div className="flagntitle">
                    <img className="flaag" src={country?.flags.png}></img>
                    <p className="countryname">{country?.name.common}</p>
                </div>
                <div className="details">
                    <div className="informations">
                        <h1 className="infotitle">Basic Country Information</h1>
                        <div>
                            <div>Common name : {country?.name.common}</div>
                            <div>
                                Native name :{' '}
                                {country?.name.nativeName
                                    ? Object.keys(country?.name.nativeName).map(
                                          (item, i) => {
                                              return (
                                                  <span key={i}>
                                                      {
                                                          country?.name
                                                              .nativeName[item]
                                                              .common
                                                      }
                                                  </span>
                                              )
                                          }
                                      )
                                    : 'n/a'}
                            </div>
                            <div>
                                Official common name : {country?.name.official}
                            </div>
                            <div>
                                Official native name :{' '}
                                {country?.name.nativeName
                                    ? Object.keys(country?.name.nativeName).map(
                                          (item, i) => {
                                              return (
                                                  <span key={i}>
                                                      {
                                                          country?.name
                                                              .nativeName[item]
                                                              .official
                                                      }
                                                  </span>
                                              )
                                          }
                                      )
                                    : 'n/a'}
                            </div>
                            <div>Top-Level Domain : {country?.tld}</div>
                        </div>
                    </div>
                    <div className="informations">
                        <h1 className="infotitle">Geographical Data :</h1>
                        <div>
                            <div>
                                Latitude and longitude :{' '}
                                {country?.latlng.join(', ')}
                            </div>
                            <div>Area : {country?.area} km²</div>
                            <div>
                                Borders :{' '}
                                {country?.borders
                                    ? country.borders.join(', ')
                                    : 'n/a'}
                            </div>
                            <div>Region : {country?.region}</div>
                            <div>Subregion : {country?.subregion}</div>
                        </div>
                    </div>
                    <div className="informations">
                        <h1 className="infotitle">
                            Political and Administrative Data
                        </h1>
                        <div>
                            <div>Capital : {country?.capital}</div>
                            <div>
                                Independent :{' '}
                                {country?.independent ? 'Yes' : 'No'}
                            </div>
                            <div>UN member : {country?.UN ? 'Yes' : 'No'}</div>
                        </div>
                    </div>
                    <div className="informations">
                        <h1 className="infotitle">
                            Economic and Demographic Data
                        </h1>
                        <div>
                            <div>
                                Population : {country?.population} inhabitants
                            </div>
                            <div>
                                Currencies :{' '}
                                {country?.currencies
                                    ? Object.keys(country?.currencies).map(
                                          (item, i) => {
                                              return (
                                                  <span key={i}>
                                                      {
                                                          country?.currencies[
                                                              item
                                                          ].name
                                                      }
                                                  </span>
                                              )
                                          }
                                      )
                                    : 'n/a'}
                            </div>
                            <div>
                                GINI coefficient :{' '}
                                {country?.gini
                                    ? Object.keys(country?.gini).map(
                                          (item, i) => {
                                              return (
                                                  <span key={i}>
                                                      {country?.gini[item]}
                                                  </span>
                                              )
                                          }
                                      )
                                    : 'n/a'}
                            </div>
                        </div>
                    </div>
                    <div className="informations">
                        <h1 className="infotitle">Cultural Data</h1>
                        <div>
                            <div>
                                Languages :{' '}
                                {country?.languages
                                    ? Object.keys(country?.languages).map(
                                          (item, i) => {
                                              return (
                                                  <span key={i}>
                                                      {country?.languages[item]}
                                                  </span>
                                              )
                                          }
                                      )
                                    : 'n/a'}
                            </div>
                            <div>Gentiles : {country?.demonyms.eng.m}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
