const AdsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADS_START":
      return {
        ads: [],
        isFetching: true,
        error: false,
      };
    case "GET_ADS_SUCCESS":
      return {
        ads: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ADS_FAILURE":
      return {
        ads: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_ADS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_ADS_SUCCESS":
      return {
        ads: [...state.ads, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_ADS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_ADS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_ADS_SUCCESS":
      return {
        ads: state.ads.map(
          (ads) => ads._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_ADS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_ADS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_ADS_SUCCESS":
      return {
        ads: state.ads.filter((ads) => ads._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ADS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default AdsReducer;
