import axios from "axios";

export default async function finalFetch(config) {
    return axios(config)
        .then((response) => {
            // if (
            //   response.data.status !== 0 &&
            //   response.data.message &&
            //   !response.data.message.includes("already exists")
            // ) {
            //   networkErrorStore.setNetworkError(
            //     "Error Fetching Data for " + config.url
            //   );
            // }
            if (response.data.status > 0) {
                let message = response.data.message;
                if (message && message.length > 100) {
                    message = message.substr(0, 100);
                }
                // alertState.type = "error";
                // alertState.open = true;
                // alertState.message = message || "server error";

                return response.data;
            } else return response.data;
        })
        .catch((error) => {
            if (!error) {
                error = "Network / Server Error";
            }
            // if (error && error.constructor && error.constructor.name === "Cancel") {
            //   error = null;
            // }
            if (error && error.data && error.data.message) {
                error = error.data.message;
            }
            // if (!alertState.open && error.message) {
            //   alertState.type = "error";
            //   alertState.open = true;
            //   alertState.message = error.message;
            // }
        })
        .finally(() => { });
}