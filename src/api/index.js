import axios from "axios"

// axios 有一个公共的地址配置
axios.defaults.baseURL="http://127.0.0.1:8080/dang/";

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
// 对响应错误做点什么
    return Promise.reject(error);
});

export function getCateList(){
    // 返回的是一个promise实例对象
   return axios.get("categoryList")
}



export function getSeckillP(){
    // 返回的是一个promise实例对象
   return axios.get("bookList")
}

export function getbooklist(){
    // 返回的是一个promise实例对象
   return axios.get("bookCityList")
}


export function getbookCtategoryList(){
    return axios.get("bookCategoryList")
}


export function getClothing(){
    return axios.get("clothingList")
}


export function getClothingCategory(){
    return axios.get("clothingCategorylist")
}

export function getFootlist(){
    return axios.get('footList');
}

export function getFooterlist(){
    return axios.get("footersList");
}

export function getMayLike(){
    return axios.get("maylist");
}

export function getNavlist(){
    return axios.get("navCategorylist")
}