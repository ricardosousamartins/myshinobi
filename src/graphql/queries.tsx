import { gql } from '@apollo/client'

export const RecentlyAddedQuery = gql`
  query MyQuery {
    Ninjas(order_by: { id: desc }, limit: 5) {
      Name
      Images
    }
  }
`