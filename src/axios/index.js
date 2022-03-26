import axios from "axios";
// 请求拦截器

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.validateStatus = function (status) {
  return (status >= 200 && status < 300) || status === 406 || status === 301; // 默认值
};

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

var statusResolveCode = [200, 406, 301];
axios.interceptors.response.use(
  (response) => {
    if (statusResolveCode.indexOf(response.status) !== -1) {
      // console.log({ response_resolve: response })
      return Promise.resolve(response);
    } else {
      // console.log({ response_reject: response })
      return Promise.reject(response);
    }
  },
  (error) => {
    const { response } = error;
    // console.log({ error: response })
    if (statusResolveCode.indexOf(response.status) !== -1) {
      return Promise.resolve(error);
    } else {
      Promise.reject(error);
    }
  }
);

export default axios;