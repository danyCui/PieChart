$(function () {
	var pieobj=function(id,title,data,clickfun){
		var obj={
			id:id,
    		title:title,
    		pointFormat:'<b>{series.name}</b>: {point.num}',
    		data:data,
    		name:'数量'
		};
		if($.isFunction(clickfun)){
			obj.click=clickfun;
		}
		return obj;
	};
    var lineobj=function(id,title,categories,lefttitle,data){
        var obj={
            id:id,
            title:title,
            categories:categories,
            lefttitle:lefttitle,
            // pointFormat:'{series.name}: <b>{point.y} </b>',
            data:data
        };
        return obj;
    }
    var barobj=function(id,title,categories,lefttitle,data){
        var obj={
            id:id,
            title:title,
            categories:categories,
            lefttitle:lefttitle,
            pointFormat:'{series.name}: <b>{point.y} </b>',
            data:data
        };
        return obj;
    };
    var creatBP=function(){
    	var sv=$('#browser-tab input[name=siteOption]:checked').val();
        var st=$('#browser-tab input[name=systemOption]:checked').val();
        console.log(sv+""+st);
    	var st=$('#browser-st').val();
    	var parames=pieobj('#container1',"浏览器类型占比",piedata);
    	pie(parames);
    }
    var creatSP=function(){
    	var sv=$('#system-tab input[name=siteOption]:checked').val();
        console.log(sv);
    		var clickfun=function(pointName){
	    			var title=pointName+"系统版本占比";
			    	var parame=pieobj('#container2',title,IEdata);
			    	pie(parame);
		    	};
    		var parames=pieobj('#container1',"网站系统占比",piedata,clickfun);
    	pie(parames);
    };
    
    pie(pieobj('#container1','浏览器类型占比',piedata));
    var xAxis=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    line(lineobj('#line-chart','数据类型pv/uv曲线',xAxis,'Temperature (°C)',piedata));
    bar(barobj('#bar-chart','畅言前端功能统计数据',xAxis,'Temperature (°C)',piedata));

    $('#tablists').on('click', 'a', function(){
    	var current=$(this).parent().data("class");
    	if(current === 'browser'){
    		$('.div-sys-ver').hide();
    		creatBP();
    	}else if(current === 'system'){
            $('.div-sys-ver').show().find('#container2').empty();
    		creatSP(); 	
    	}
    });
    $('#browser-tab input').on('change',function(){
    	creatBP();
    });
    $('#system-tab input').on('change',function(){
    	$('#container2').empty();
    	creatSP(); 	
    });

});
