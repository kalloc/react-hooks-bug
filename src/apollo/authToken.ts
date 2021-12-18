import {useApolloClient} from "@apollo/client";

import {useLocalStorage} from "../hooks/localStorage";


const TOKEN_NAME = "verySecretTokenPleaseDontCopy";

export const useAuthToken = () => {
  const [authToken, setLocalStorage] = useLocalStorage(TOKEN_NAME, null);
  const setAuthToken = (newAuthToken: string) => setLocalStorage(TOKEN_NAME, newAuthToken);
  const removeAuthToken = () => setLocalStorage(TOKEN_NAME, undefined);

  return [authToken, setAuthToken, removeAuthToken];
};

export const useLogout = () => {
  const [, , removeAuthToken] = useAuthToken();
  const apolloClient = useApolloClient();
  const logout = async () => {
    await apolloClient.clearStore();
    removeAuthToken();
  };

  return logout;
};

export default useAuthToken;
