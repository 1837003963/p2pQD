/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
	//服务器
	'SERVER': 'http://localhost:8080/p2p/',
	//用户
	'Yonhu_Yan':'/Yan',//验证码
	'Yonhu_Add':'/add',//注册
	'Yonhu_Login':'/login',//登陆

  //树形菜单
  'Tree_List':'/list',

	'getFullPath': k => {
		return this.SERVER + this[k];
	}
}
