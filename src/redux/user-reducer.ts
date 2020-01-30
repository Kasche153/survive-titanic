interface SetUsername {
  type: "SET_USERNAME";
  payload: string;
}

export const userResolver = (
  state = {},
  action: { type: string; payload: object }
) => {
  if (action.type === "SET_USERNAME")
    return { ...state, username: action.payload };
  return state;
};

/**
 * dispatch({type: "SET_USERNAME", payload: "Erik" });
 *
 * REDUX = {username: "erik", userId: 12399}
 *
 *
 * <Component>
 *
 */
