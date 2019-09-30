import React, {Component} from 'react';

//拼接请求参数
//https://stackoverflow.com/questions/35325370/post-a-x-www-form-urlencoded-request-from-react-native/35420582
function getParams(params) {
    let formBody = [];
    for (let property in params) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
}

function request(method, url, params, onSuccess, onFail) {
    let config = {
        method: method,
    };
    if (params !== '') {
        config['body'] = getParams(params);
    }
    config['headers'] = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    fetch(new Request(url, config))
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.errorCode >= 0) {
                onSuccess(responseJson)
            } else {
                onFail(responseJson.errorMsg);
            }
        })
        .catch(error => {
            onFail('Fail')
        });
}

export default class FetchUtils extends Component {
    static get(url, params, onSuccess, onFail) {
        return request('GET', url, params, onSuccess, onFail)
    }

    static post(url, params, onSuccess, onFail) {
        return request('POST', url, params, onSuccess, onFail)
    }
}