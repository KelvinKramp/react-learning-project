import { gql } from "@apollo/client";

const GET_WEATHER = gql`
    query getCityByName($name: String!) {
                getCityByName(name: $name) {
                name
                country
                weather {
                temperature {
                    min
                }
                }
            }
            }
`

export default GET_WEATHER