export default {
	setResturantNameByAsync: function(context, payload) {
		console.log('setResturantNameByAsync execute.....')
		// 		setTimeout(() => {
		// 			console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
		// 			context.commit('setResturantName', payload); //Action提交的是mutation
		// 		}, 2000);

		let _this = payload._this;
		let url = _this.axios.urls.SYS_VUEX_EDIT;
		_this.axios.post(url, {
			resturantName: payload.resturantName
		}).then((resp) => {
			context.commit('setResturantName', {
				resturantName: resp.data.result
			});
		}).catch((error) => {});
		console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
	}
};
