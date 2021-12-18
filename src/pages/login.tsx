import {Link} from "react-router-dom";
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
        <h1 >
          Nice to see you again, go ahead and log in
        </h1>
        <div>
          <label>E-pasts</label>
          <input name="username" placeholder="your@email.com" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div>
          <button
            color="light_blue"
            style={{width: "100%", margin: 0}}
          />
        </div>
        <div>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};
