import axios from 'axios'

const baseURL = ''
const deviceType = ''

export default {
  get: function (url, params, callback, error) {
    axios.get(url, {
      headers: {
        'XX-Device-Type': deviceType
        // 'XX-Token': this.getToken()
      },
      baseURL: baseURL,
      timeout: 5000,
      params: params,
      responseType: 'json',
      transformResponse: function (data) {
        // 在传递给 then/catch 前，允许修改响应数据
        return data
      }
    }).then(function (res) {
      callback && callback(res.data)
    }).catch(function (res) {
      if (error === undefined) {
        console.info('操作失败，请确认信息是否正确')
      } else {
        error(res)
      }
    })
  },
  post: function (url, data, callback, error) {
    axios.post(url, data, {
      headers: {
        'XX-Device-Type': deviceType
        // 'XX-Token': this.getToken()
      },
      baseURL: baseURL,
      timeout: 5000,
      responseType: 'json',
      transformResponse: function (data) {
        // 在传递给 then/catch 前，允许修改响应数据
        return data
      }
    }).then(function (res) {
      callback && callback(res.data)
    }).catch(function (res) {
      if (error === undefined) {
        console.info('操作失败，请确认信息是否正确')
      } else {
        error(res)
      }
    })
  },
  delete: function (url, params, callback, error) {
    axios.delete(url, {
      headers: {
        'XX-Device-Type': deviceType
        // 'XX-Token': this.getToken()
      },
      baseURL: baseURL,
      timeout: 5000,
      params: params,
      responseType: 'json'
    }).then(function (res) {
      callback && callback(res.data)
    }).catch(function (res) {
      if (error === undefined) {
        console.info('操作失败，请确认信息是否正确')
      } else {
        error(res)
      }
    })
  }
}
