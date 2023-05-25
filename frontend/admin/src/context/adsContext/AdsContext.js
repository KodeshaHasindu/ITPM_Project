import AdsReducer from "./AdsReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  ads: [],
  isFetching: false,
  error: false,
};

export const AdsContext = createContext(INITIAL_STATE);

export const AdsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdsReducer, INITIAL_STATE);

  return (
    <AdsContext.Provider
      value={{
        ads: state.ads,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
