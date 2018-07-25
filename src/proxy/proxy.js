export function getLocation(param){
	return new Promise((resolve,reject) => {
		var data={
			location: param.latitude+','+param.longitude,
			/*换成自己申请的key*/
			key:"JWWBZ-DXPL6-GOUS2-EDNCS-LINR3-DEBU6",
			get_poi:0    
		}
		var url = document.location.protocol + "//apis.map.qq.com/ws/geocoder/v1/?";
		data.output="jsonp";  
		$.ajax({
		    type:"get",
		    dataType:'jsonp',
		    data:data,
		    jsonp:"callback",
		    jsonpCallback:"getData",
		    url:url,
		    success:function(json){
		        resolve(json.result);
		    },error : function(err){
		    	reject(err)
		    }
		})
	})
}
export function getPosition(){
	return new Promise((resolve, reject) => {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function (position) {
	      let latitude = position.coords.latitude
	      let longitude = position.coords.longitude
	      let data = {
	        longitude: String(longitude).match(/\d+\.\d{0,7}/)[0],
	        latitude: String(latitude).match(/\d+\.\d{0,7}/)[0],
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
