import axios from "axios";
import { baseUrl } from "../config";
import { requestInProgress } from "./endpoints";
import finalFetch from "./finalFetch";
import { getToken } from "../token";
import { getDefaultHeaders } from "../defaultHeaders";

export async function Fetch(
  endpoint,
  data,
  type = "get",
  endpointName,
  cancelPreviousRequest = true,
  blockIfAlreadyInProgress = false,
  reqHeaders,
  baseurl = baseUrl
) {
  const CancelToken = axios.CancelToken;

  let headers = getDefaultHeaders();
  if (reqHeaders) {
    headers = { ...headers, ...reqHeaders };
  }

  if (
    cancelPreviousRequest && endpointName && requestInProgress[endpointName] &&
    typeof requestInProgress[endpointName] === "function"
  ) {
    // cancel the request if the request is already in progress
    requestInProgress[endpointName]();
  }

  if (blockIfAlreadyInProgress) {
    Promise.reject({code: 1, "request already in progress"});
  }
    return await finalFetch({
      method: type,
      url: endpoint,
      baseURL: baseurl,
      data: data,
      headers: headers,
      cancelToken: new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        endpointName && (requestInProgress[endpointName] = c);
      }),
    });
}

