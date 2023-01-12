export const Get_User = (item) => {
    return {
        type: "get/users",
        payload: item,
    };
};

export const User_action = (item) => {
    return {
        type: "get/singleuser",
        payload: item,
    };
};