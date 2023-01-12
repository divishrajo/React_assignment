export default function reducer(state, {
    type,
    payload
}) {
    switch (type) {
        case "get/users":
            return {
                ...state,
                userData: payload,
            };

        case "get/singleuser":
            return {
                ...state,
                userItem: getSingleUser(payload, state.userData),
            };
        default:
            return state;
    }
}

function getSingleUser(id, Data) {
    let foundSingleUserData = Data.filter((el, i) => {
        return el.id === +id;
    });
    return foundSingleUserData[0];
}