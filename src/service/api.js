import config from '../config';
import { pickBy, identity, isEmpty } from "ramda";

const fetchStatusHandler = async response => {
  if (response.status === 200) {
    return response;
  } else {
    throw await response.json();
  }
};

const buildQueryString = query =>
  query ? `?${query.map(([key, value]) => `${key}=${value}`).join("&")}` : ``;

const buildURL = (endpoint, query) => {
  return `${config.API_BASE_URL}${endpoint}${buildQueryString(query)}`;
};

const fetchData = ({
  url,
  method = "GET",
  headers = {},
  body = {},
  token = ""
}) => {
  if (token) {
    headers.push(["x-token", token]);
  }
  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  let requestOptions = pickBy(identity)({
    method,
    headers
  });
  if (!isEmpty(body)) requestOptions.body = JSON.stringify(body);
  return fetch(url, requestOptions).then(fetchStatusHandler);
};

export const fetchSearchRecipe = (searchInput) => {
  let query = [];
  if(searchInput){
    query = [
      [ "q", searchInput ],
      [ "app_id" , '51de5f5a' ],
      [ "app_key" , '9874dd5d15ae7f01b11c7aa399c21887' ],
    ];
  } else {
    query = [
      [ "r", 'http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408' ],
      [ "app_id" , '51de5f5a' ],
      [ "app_key" , '9874dd5d15ae7f01b11c7aa399c21887' ],
    ];
  }

  return fetchData({
    url: buildURL("/search", query)
  });
};