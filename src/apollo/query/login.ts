import {useMutation, MutationResult, gql} from "@apollo/client";
import useAuthToken from "../authToken";

export const loginMutationGQL = gql`
  mutation login($login: String!, $password: String!) {
    login(input: { identifier: $login, password: $password }) {
      jwt
    }
  }
`;

export const useLoginMutation = (): [any, MutationResult<any>] => {
  const [_, setAuthToken, removeAuthToken] = useAuthToken();

  const [mutation, result] = useMutation(loginMutationGQL, {
    onCompleted: data => {
      setAuthToken(data.login.jwt);
    },
    notifyOnNetworkStatusChange: true,
  });

  const login = (user: string, password: string) => {
    removeAuthToken();
    return mutation({
      variables: {
        login: user,
        password,
      },
    });
  };
  return [login, result];
};
