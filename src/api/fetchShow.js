import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "http://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((response) => {
      return response;
    });
};
