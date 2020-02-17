import axios from 'axios'
import qs from 'qs';

var instance = axios.create({
  // baseURL: 'http://localhost:12100/',
  // baseURL: 'http://118.178.135.214/',
   // baseURL: 'http://192.168.2.119:12100/',
  baseURL: 'http://192.168.2.132:12100/',
  // baseURL:`http://${process.env.HOST}:${process.env.PORT}`,
  // timeout: 1000,
  // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  // 参数序列化
});

function serialize (data = {}) {
  let dataStr = []
  Object.keys(data).forEach(k => {
    let value = data[k]
    if (value !== null && value !== undefined) {
      dataStr.push(`${k}=${encodeURI(value)}`)
    }
  })
  return dataStr.join('&')
}

function proessData (response, e) {
  let result = response.data
  if (result.state == '0') {
    return result.data
  }
  throw result || e
}
function proessData1 (response, e) {
  let result = response.data
  return result;
}
function get (path, data) {
  let url = path;
  return instance.get(url + '?' + serialize(data)).then(proessData)
}       
function post (path, data) {
  console.log(data);
  let url = path;
  return instance.post(url, data).then(proessData)
  // return instance.post(url, qs.stringify(data)).then(proessData)
}
function post1 (path, data) {
  let url = path;
  return instance.post(url, data).then(proessData1)
}

export default { get, post}
