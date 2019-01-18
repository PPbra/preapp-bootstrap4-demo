import StorageService from "./StorageService";
import ConfigService from "./ConfigService";

const BASE_URL = ConfigService.get('BASE_URL');
const getKey = () => {
    const key = document.getElementById('key-token');
    return !!key ? key.value : ""

}

function formatResponse(responseJSON) {
    if (responseJSON.success) {
        return Promise.resolve(responseJSON.data);
    } else {
        return Promise.reject(responseJSON.message);
    }
};

export default {
    getKey: (route) => {
        let authenHeader = {};

        const userInfo = JSON.parse(StorageService.get("user-info"));
        authenHeader.token = userInfo && userInfo.token;

        const req = new Request(BASE_URL + route, {
            method: 'GET',
            headers: authenHeader
        });

        return fetch(req)
            .then(res => res.json())
            .then(formatResponse);
    },
    get: (route, authenticate = true, authenUrl = false, token = undefined) => {
        const key = getKey();
        let authenHeader = { key: key };
        if (token === undefined) {
            const userInfo = JSON.parse(StorageService.get("user-info"));
            authenHeader.token = userInfo && userInfo.token;
        } else {
            authenHeader.token = token;
        }

        const req = new Request(BASE_URL + route, {
            method: 'GET',
            headers: authenticate ? authenHeader : {}
        });

        if (authenUrl) {
            return fetch(req)
                .then(res => res.json())
                .then(formatResponseUrl);
        } else {
            return fetch(req)
                .then(res => res.json())
                .then(formatResponse);
        }
    },
    post: (route, payload, authenticate = true, message = false) => {
        const userInfo = StorageService.get('user-info');
        const key = getKey();
        const defaultHeader = {
            'Content-Type': 'application/json',
            key: key
        };

        const authenHeader = {
            ...defaultHeader,
            token: userInfo && userInfo.token
        };

        const req = new Request(BASE_URL + route, {
            method: 'POST',
            headers: authenticate ? authenHeader : defaultHeader,
            body: JSON.stringify(payload)
        });

        if (message) {
            return fetch(req)
                .then(res => res.json())
                .then(formatResponseMessage);
        }
        else {
            return fetch(req)
                .then(res => res.json())
                .then(formatResponse);
        }


    },
    put: (route, payload, authenticate = true, message = false) => {
        const key = getKey();
        const defaultHeader = {
            'Content-Type': 'application/json',
        };

        const authenHeader = {
            ...defaultHeader,
            token: JSON.parse(StorageService.get("user-info")) && JSON.parse(StorageService.get("user-info")).token,
            key: key
        };

        const req = new Request(BASE_URL + route, {
            method: 'PUT',
            headers: authenticate ? authenHeader : defaultHeader,
            body: JSON.stringify(payload)
        });

        if (message) {
            return fetch(req)
                .then(res => res.json())
                .then(formatResponseMessage);
        }

        return fetch(req)
            .then(res => res.json())
            .then(formatResponse);
    },
    delete: (route, authenticate = true) => {
        const key = getKey();
        const authenHeader = {
            token: JSON.parse(StorageService.get("user-info")) && JSON.parse(StorageService.get("user-info")).token,
            key: key
        };

        const req = new Request(BASE_URL + route, {
            method: 'DELETE',
            headers: authenticate ? authenHeader : {}
        });

        return fetch(req)
            .then(res => res.json())
            .then(formatResponse);
    },
    postPassword: (route, password, token) => {
        const key = getKey();
        const req = new Request(BASE_URL + route, {
            method: 'POST',
            headers: {
                token: token,
                'Content-Type': 'application/json',
                key: key
            },
            body: JSON.stringify({
                newPassword: password,
                passwordConfirm: password
            })
        });
        return fetch(req)
            .then(res => res.json())
            .catch(err => err)
    }
};
