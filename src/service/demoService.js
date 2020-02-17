
// 第四轮学科评估 - api

import dao from './BaseDao'

export default {
  demo(data){    // 获得左侧菜单       
  	return dao.post('/v1.0/api/get_subjects/',data)
  },
}
