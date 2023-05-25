export const getAdsStart = () => ({
  type: "GET_ADS_START",
});

export const getAdsSuccess = (movies) => ({
  type: "GET_ADS_SUCCESS",
  payload: movies,
});

export const getAdsFailure = () => ({
  type: "GET_ADS_FAILURE",
});

export const createAdsStart = () => ({
  type: "CREATE_ADS_START",
});

export const createAdsSuccess = (movie) => ({
  type: "CREATE_ADS_SUCCESS",
  payload: movie,
});

export const createAdsFailure = () => ({
  type: "CREATE_ADS_FAILURE",
});

export const updateAdsStart = () => ({
  type: "UPDATE_ADS_START",
});

export const updateAdsSuccess = (movie) => ({
  type: "UPDATE_ADS_SUCCESS",
  payload: movie,
});

export const updateAdsFailure = () => ({
  type: "UPDATE_ADS_FAILURE",
});

export const deleteAdsStart = () => ({
  type: "DELETE_ADS_START",
});

export const deleteAdsSuccess = (id) => ({
  type: "DELETE_ADS_SUCCESS",
  payload: id,
});

export const deleteAdsFailure = () => ({
  type: "DELETE_ADS_FAILURE",
});
