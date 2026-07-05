import { login, register, logout } from "../api/auth-api";
import { useAuthcontext } from "../contexts/AuthContext";

export const useLogin = () => {

    const { changeAuthState } = useAuthcontext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);
        return authData;
    };
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthcontext();

    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);
        return authData;
    };
    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthcontext();

    const logoutHandler = async () => {
        await logout();
        localLogout();
    };

    return logoutHandler;
}
