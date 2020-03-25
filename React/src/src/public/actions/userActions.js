export const USER_ACTION = "USER_LOGIN"
export const setAuth = isLogin => {
    return {
        type: USER_ACTION,
        payload: {
            value: isLogin
        }
    };
};