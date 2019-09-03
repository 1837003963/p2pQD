export default {
  setYoName:function(state, payload) {
		state.yoName = payload.yoName;
	},
  setYoId:function(state, payload) {
		state.yoId = payload.yoId;
	},
	clear:function(state){
		for(let attrName in state){
			console.log(attrName+'='+state[attrName])
			state[attrName]=null;
			console.log();
		}
	},
	setService:function(state,payload){
		state.serviceid = payload.serviceid;
	}
}
