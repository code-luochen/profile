## 步骤一
1. 创建一个 dispatch 函数，该函数接收两个参数， 第一个参数 req, 第二个参数 rsp
2. 在函数中， 从 req 中获取 input 属性，并将其赋值给变量 data
3. 将 data 数据转换成字符串，并赋值给变量 rawRequest
4. 调用函数 do_dispatch, 传入两个参数， 第一个参数是 req， 第二个参数是 rsp，该函数返回值赋值给变量 res


## 步骤二
1. 创建一个 do_dispatch 函数， 该函数接收两个参数， 第 一个参数是 req， 第二个参数是 rsp
2. 在函数中， 从 req 中获取 input 属性，并将其赋值给变量 data
3. 判断 data.kb_engine === "zlf" && data.kb_api_ver === "v2"， 如果是， 则调用函数 callRetrieveListAPI, 并传入参数 data.query， 该函数返回值赋值给变量 res， 并且返回rsp.output = {
            status: "0",
            retrieve_result: res
        }

        return {
            result: res,
            failReason: ''
        }
4. 如果不是， 则返回 
    rsp.output = {
        status: "4",
        msg: "参数匹配类型错误"
    }

    return {
        result: "",
        failReason: ""
    }

## 步骤三
1. 创建一个 callRetrieveListAPI 函数， 该函数接收一个参数， 第一个参数是 payload, 该参数是一个对象
2. 该函数调用返回 return postJsonWithHeader(RETRIEVE_LIST_URL, payload, headers, 10) 其中 RETRIEVE_LIST_URL 是全局变量， 值是 "https://kbase-dev.xiaoduoai.com/ec_kb/api/open/retrieval/retrieve-list" , payload 是参数， headers 是请求头值是 {
        "Content-Type": "application/json",
        "Authorization": "Bearer kbase_62bd1305e6434492854b7908ad30c21a"
    };， 10 是超时时间

## 步骤四
直接调用 dispatch 函数， 并将 req 和 rsp 作为参数传入
