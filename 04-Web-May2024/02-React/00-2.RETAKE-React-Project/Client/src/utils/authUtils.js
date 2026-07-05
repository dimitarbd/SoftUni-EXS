export const getAccessToken = () => {
    const storedToken = localStorage.getItem('auth');

    if (!storedToken) {
        return '';
    }

    const authData = JSON.parse(storedToken);

    
    return authData?.accessToken;
}