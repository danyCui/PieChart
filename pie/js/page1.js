$(function () {
	var para=function(id,title,data,clickfun){
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
    var creatBP=function(){
    	var sv=$('#browser-tab input[name=siteOption]:checked').val();
        var st=$('#browser-tab input[name=systemOption]:checked').val();
        console.log(sv+""+st);
    	var st=$('#browser-st').val();
    	var parames=para('#container1',"浏览器类型占比",piedata);
    	pie(parames);
    }
    var creatSP=function(){
    	var sv=$('#system-tab input[name=siteOption]:checked').val();
        console.log(sv);
    		var clickfun=function(pointName){
	    			var title=pointName+"系统版本占比";
			    	var parame=para('#container2',title,IEdata);
			    	pie(parame);
		    	};
    		var parames=para('#container1',"网站系统占比",piedata,clickfun);
    	pie(parames);
    };
    
    pie(para('#container1','浏览器类型占比',piedata));

    $('#tablists').on('click', 'a', function(){
    	var current=$(this).parent().data("class");
    	if(current === 'browser'){
    		$('#container2').empty();
    		creatBP();
    	}else if(current === 'system'){
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
