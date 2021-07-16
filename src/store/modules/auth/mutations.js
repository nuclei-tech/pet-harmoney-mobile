import { gql } from '@apollo/client';

const ADD_PET = gql`
    mutation addPet($name: String! $type: String! $age: Int! $ownerId: ID!) {
        addPet(name: $name type: $type age: $age ownerId: $ownerId){
            id
        }
    }
`

export { ADD_PET };