import {gql, useMutation} from "@apollo/client";

export const loginMutationGQL = gql`
  mutation login($login: String!, $password: String!) {
    login(input: { identifier: $login, password: $password }) {
      jwt
    }
  }
`;

export const LoginPage = ({loading}: {loading: boolean}) => {
  const [loginMutation, loginMutationResults] = useMutation(loginMutationGQL);

  return (
    <div >
      <form  onSubmit={event => {
        event.preventDefault();
        loginMutation({variables: {login: "x", password: "x"}});
      }}>
        <div>
          <button
            style={{width: "20%", margin: 0}}>CLICK TO TRIGGER</button>
        </div>
      </form>
    </div>
  );
};
