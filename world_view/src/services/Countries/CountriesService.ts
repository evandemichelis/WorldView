import { api } from "../ServiceHelper";

export const fetchAllCountries = async() => {
  return await api.get('/all/')
}

export const fetchCountriesbyCode = async (code: string | null) => {
    return await api.get(`/alpha/${code}/`)
}

export const fetchCountriesbyName = async (name: string) => {
    return await api.get(`/name/${name}/`)
}