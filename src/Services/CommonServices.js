import axios from "axios";

let BASE_URL='http://ec2-44-201-166-178.compute-1.amazonaws.com:8000/api'
let BASE_URL2='http://ec2-44-201-166-178.compute-1.amazonaws.com:8001/api'
export const MainUrl="http://ec2-44-201-166-178.compute-1.amazonaws.com:8000/api"

export const getDataFromApi = (getUrl,is_api1="") => {
    getUrl = getUrl.indexOf("mocky") !== -1 ? getUrl : (getUrl.startsWith("/") ? `${is_api1 ? BASE_URL2 : BASE_URL}${getUrl}` : `${BASE_URL}/${getUrl}`);
    const resp = axios.get(getUrl,'')
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log("Error", err);
        });
    return resp;
};

// call the api (PUT) endpoint internal system
export const putDataFromApi = (putUrl, model,is_api1="") => {
    putUrl = putUrl.startsWith("/") ? `${is_api1 ? BASE_URL2 : BASE_URL}${putUrl}` : `${BASE_URL}/${putUrl}`;
    var config = {
        method: 'put',
        url: putUrl,
        data : model,
    }
    /* if(is_formdata){
        config['headers']= {...data.getHeaders() }
    } */
    const resp = axios(config)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log("Error", err);
        });
    return resp;
};

// call the api (POST) endpoint internal system
export const  postDataFromApi = async (postUrl, model,is_api1="",is_formdata="") => {
    postUrl = postUrl.startsWith("/") ? `${is_api1 ? BASE_URL2 : BASE_URL}${postUrl}` : `${BASE_URL}/${postUrl}`;
    
    var config = {
        method: 'post',
        url: postUrl,
        data : model,
    }
    if(is_formdata){
        config['headers']['Content-Type']='multipart/form-data'
    }
    const resp = axios(config)
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.log(err)
    });
    return resp;
};

// call the api (DELETE) endpoint internal system
export const deleteDataFromApi = (deleteUrl, model,is_api1="") => {
    deleteUrl = deleteUrl.startsWith("/") ? `${is_api1 ? BASE_URL2 : BASE_URL}${deleteUrl}` : `${BASE_URL}/${deleteUrl}`;
    const resp = axios.delete(deleteUrl, { data: model })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log("Error", err);
        });
    return resp;
};
