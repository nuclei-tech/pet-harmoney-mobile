import { gql } from '@apollo/client';

const LOAD_PETS = gql`
    query {
        pets{
            id
            name
            type
            age
        }
    }
`

const LOAD_OWNERS = gql`
    query {
        owners{
        id
        name
        age
        }
    }
`

const LOAD_PET = gql`
    query pet($id: ID) {
        pet(id: $id){
        name
        type
        age
        owner{
            name
            age
            pets{
                id
                name
                type
            }
        }
        }
    }
`

export { LOAD_PETS, LOAD_OWNERS, LOAD_PET }