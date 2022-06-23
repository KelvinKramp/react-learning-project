import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
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
