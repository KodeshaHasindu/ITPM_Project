import axios from "axios";
import {
  createAdsFailure,
  createAdsStart,
  createAdsSuccess,
  deleteAdsFailure,
  deleteAdsStart,
  deleteAdsSuccess,
  getAdsFailure,
  getAdsStart,
  getAdsSuccess,
} from "./AdsActions";

export const getAds = async (dispatch) => {
  dispatch(getAdsStart());
  try {
    const res = await axios.get("/ads", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getAdsSuccess(res.data));
  } catch (err) {
    dispatch(getAdsFailure());
  }
};

//create
export const createAds = async (ads, dispatch) => {
  dispatch(createAdsStart());
  try {
    const res = await axios.post("/ads", ads, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createAdsSuccess(res.data));
  } catch (err) {
    dispatch(createAdsFailure());
  }
};

//delete
export const deleteAds = async (id, dispatch) => {
  dispatch(deleteAdsStart());
  try {
    await axios.delete("/ads/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteAdsSuccess(id));
  } catch (err) {
    dispatch(deleteAdsFailure());
  }
};
