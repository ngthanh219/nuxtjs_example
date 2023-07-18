import axios from 'axios';

const errorMessage = {
    error: {
        error_message: 'An error has occurred'
    }
};

function rejectError(err) {
    if (typeof (err.response) !== 'undefined') {
        return err.response.data;
    } else {
        return errorMessage;
    }
}

function requestAPI(requestData) {
    if (requestData.accessToken) {
        axios.defaults.headers.common = {'Authorization': `Bearer ` + requestData.accessToken}
    }

    return new Promise((resolve, reject) => {
        axios[requestData.method](
            process.env.apiUrl + requestData.route,
            requestData.formRequest ? requestData.formRequest : null
        ).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(rejectError(err));
        })
    });
}

export default requestAPI;
