export function getLocation(param){
	return new Promise((resolve,reject) => {
		var request = new XMLHttpRequest();
		request.open('GET','https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude='+param.latitude+'&longitude='+param.longitude,true);
		request.onreadystatechange = function () {
		  if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
		  	resolve(JSON.parse(request.response))
		  }else if(request.readyState === XMLHttpRequest.DONE && request.status != 200){
		  	reject(arguments)
		  }
		}
		request.send();
	})
}
export function getPosition(){
	return new Promise((resolve, reject) => {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function (position) {
	      let latitude = position.coords.latitude
	      let longitude = position.coords.longitude
	      let data = {
	        longitude: String(longitude).match(/\d+\.\d{0,6}/)[0],
	        latitude: String(latitude).match(/\d+\.\d{0,6}/)[0],
	        channelType: '00'
	      }
	      resolve(data)
	    }, function () {
	      reject(arguments)
	    })
	  } else {
	    reject('你的浏览器不支持当前地理位置信息获取')
	  }
	})
}
