import tool from '../util/tool';

export default {
  getUserList(success) {
    tool.ajax({
      url: '/user/list',
      type: 'get',
      success
    })
  },
  editUser(data, success) {
    tool.ajax({
      url: '/user/edit',
      type: 'post',
      data,
      success
    })
  },
  deleteUser(data, success) {
    tool.ajax({
      url: '/user/delete',
      type: 'get',
      data,
      success
    })
  },
  getUserInfo( success) {
    tool.ajax({
      url: '/user/getInfo',
      type: 'get',
      success
    })
  },
  login(data, success) {
    tool.ajax({
      url: '/login',
      type: 'post',
      data,
      success
    })
  },
  logout(success){
    tool.ajax({
      url: '/logout',
      type: 'get',
      success
    })
  },
  getPublicKey(success){
    tool.ajax({
      url: '/getPublicKey',
      type: 'get',
      success
    })
  },
  register(data,success){
    tool.ajax({
      url: '/user/register',
      type: 'post',
      data,
      success
    })
  }
}
