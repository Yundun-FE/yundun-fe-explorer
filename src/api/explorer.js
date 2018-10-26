import request from '@/utils/request'
import { SERVER_URL } from '@/constant/server'

let base = SERVER_URL['explorer']
if (process.env.APP_ENV === 'development') {
  base = 'http://127.0.0.1:7001'
}

export default {
  productCreate: function productCreate(data) {
    return request({
      url: `${base}/products`,
      method: 'post',
      data
    })
  },

  productDelete: function productDelete(id) {
    return request({
      url: `${base}/products/${id}`,
      method: 'delete'
    })
  },

  productUpdate: function productUpdate(id, data) {
    return request({
      url: `${base}/products/${id}`,
      method: 'put',
      data
    })
  },

  productList: function productList(data) {
    return request({
      url: `${base}/products`,
      method: 'post',
      data
    })
  },

  jobCreate: function jobCreate(data) {
    return request({
      url: `${base}/jobs`,
      method: 'post',
      data
    })
  },

  jobDelete: function jobDelete(id) {
    return request({
      url: `${base}/jobs/${id}`,
      method: 'delete'
    })
  },

  jobUpdate: function jobUpdate(id, data) {
    return request({
      url: `${base}/jobs/${id}`,
      method: 'put',
      data
    })
  },

  jobList: function jobList(data) {
    return request({
      url: `${base}/jobs`,
      method: 'get',
      data
    })
  },

  jobId(id) {
    return request({
      url: `${base}/jobs/${id}`,
      method: 'get'
    })
  },

  jobExecutorNumber(name, number) {
    return request({
      url: `${base}/jobs/executor/${name}/${number}`,
      method: 'get'
    })
  },

  jobExecutorList(name) {
    return request({
      url: `${base}/jobs/executor/${name}`,
      method: 'get'
    })
  },

  jenkinsJobStart(name, data) {
    return request({
      url: `${base}/jenkins/jobs/${name}/start`,
      method: 'post',
      data
    })
  },

  accountCreate: function accountCreate(data) {
    return request({
      url: `${base}/accounts`,
      method: 'post',
      data
    })
  },

  accountDelete: function accountDelete(id) {
    return request({
      url: `${base}/accounts/${id}`,
      method: 'delete'
    })
  },

  accountUpdate: function accountUpdate(id, data) {
    return request({
      url: `${base}/accounts/${id}`,
      method: 'put',
      data
    })
  },

  accountList: function accountList(data) {
    return request({
      url: `${base}/accounts`,
      method: 'get',
      data
    })
  },

  cmdCreate: function cmdCreate(data) {
    return request({
      url: `${base}/cmds`,
      method: 'post',
      data
    })
  },

  cmdDelete: function cmdDelete(id) {
    return request({
      url: `${base}/cmds/${id}`,
      method: 'delete'
    })
  },

  cmdUpdate: function cmdUpdate(id, data) {
    return request({
      url: `${base}/cmds/${id}`,
      method: 'put',
      data
    })
  },

  cmdList: function cmdList(data) {
    return request({
      url: `${base}/cmds`,
      method: 'get',
      data
    })
  },

  websiteCreate: function websiteCreate(data) {
    return request({
      url: `${base}/websites`,
      method: 'post',
      data
    })
  },

  websiteDelete: function websiteDelete(id) {
    return request({
      url: `${base}/websites/${id}`,
      method: 'delete'
    })
  },

  websiteUpdate: function websiteUpdate(id, data) {
    return request({
      url: `${base}/websites/${id}`,
      method: 'put',
      data
    })
  },

  websiteList: function websiteList(data) {
    return request({
      url: `${base}/websites`,
      method: 'get',
      data
    })
  },

  progressList: function progressList(name) {
    return request({
      url: `${base}/progresses`,
      method: 'get'
    })
  },

  progressName: function progressName(name) {
    return request({
      url: `${base}/progresses/${name}`,
      method: 'get'
    })
  },

  jobStart: function jobStart(name) {
    return request({
      url: `http://172.16.100.40:8080/job/${name}/build`,
      method: 'post',
      params: { delay: '0sec' }
    })
  }
}
