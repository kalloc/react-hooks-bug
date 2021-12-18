import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const userQueryGQL = gql`
  query user {
    me {
      id
      username
      email
    }
  }
`;

export const useUserQuery = () => useQuery(userQueryGQL);
