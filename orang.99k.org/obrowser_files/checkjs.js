	function checkBrower(){
		var isIE  = navigator.userAgent.search("MSIE") > -1;
	    var isIE55= navigator.userAgent.search("MSIE 5.5") > -1;
	    var isIE6 = navigator.userAgent.search("MSIE 6") > -1; 
	    var isIE7 = navigator.userAgent.search("MSIE 7") > -1; 
	    var isIE8 = navigator.userAgent.search("MSIE 8") > -1; 
	    var isFirefox = navigator.userAgent.search("Firefox") > -1; 
	    var isOpera   = navigator.userAgent.search("Opera") > -1; 
	    var isSafari  = navigator.userAgent.search("Safari") > -1;//Google瀏覽器是用這核心 
	    if (isIE8) { 
	        return 'ie8';
	    }
	    if (isIE7) { 
	    	 return 'ie7';
	    }
	    if (isIE) { 
	        return 'ie';
	    } 
	    if (isFirefox) { 
	        return 'ff';
	    } 
	    if (isOpera) { 
	        return 'op';
	    } 
	    if (isSafari) { 
	        return 'sa';
	    }
	    return 'un';
	}

	function VF_f_s_m(){ //v2.0
    	var theForm = document.f_s_m;
    	theForm['browser_'].value = checkBrower();
    	var emailRE = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    	var errMsg = "";
    	var setfocus = "";
    	var userRE2 = /[0-9]/g;
    	
    	if (!checkPhone2(theForm['textfield3'].value)){
    		errMsg = "請填寫正確的電話";
    		setfocus = "['textfield3']";
		}
    	if (theForm['textfield3'].value.length < 6){
    		errMsg = "請填寫正確的電話";
    		setfocus = "['textfield3']";
    	}	
    	if (theForm['textfield3'].value == ""){
    		errMsg = "請填寫電話";
    		setfocus = "['textfield3']";
    	} 
    	
    	if (!checkEmail(theForm['textfield4'].value)){
    		errMsg = "請填寫正確的EMAIL";
    		setfocus = "['textfield4']";
    	}
    	if (theForm['textfield4'].value == ""){
    		errMsg = "請填寫EMAIL";
    		setfocus = "['textfield4']";
    	}
    	
    	if (userRE2.test(theForm['textfield2'])){
    		errMsg = "請填寫正確的年齡";
    		setfocus = "['textfield2']";
		}
    	if (theForm['textfield2'].value.length < 1){
    		errMsg = "請填寫正確的年齡";
    		setfocus = "['textfield2']";
    	}	
    	if (theForm['textfield2'].value == ""){
    		errMsg = "請填寫年齡";
    		setfocus = "['textfield2']";
    	}    	
    	if (theForm['textfield'].value.length < 2){
    		errMsg = "請填寫正確的姓名";
    		setfocus = "['textfield']";
    	}	
    	if (theForm['textfield'].value == ""){
    		errMsg = "請填寫姓名";
    		setfocus = "['textfield']";
    	}
    	if (errMsg != ""){
    		alert(errMsg);
    		eval("theForm" + setfocus + ".focus()");
    	}else {
        	if(confirm("確認送出嗎?")){
        	 	theForm.submit();
        	}
    	}
    }
	//
    function onloader2(){
    	var brn = checkBrower();
        if(brn != 'ie8'){
        	marsFrame.location.href='index_none.html';
        }    	
    }	
	//
	function checkPhone2(strPhone){
		var userRE1 = /^([0-9_.-\[\]\(\)\*\#\-])+$/;
		if (strPhone.length >= 6) {
			if (userRE1.test(strPhone)) {
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
		return false;
	}
	
    function checkEmail(emailStr)
    {
    	var emailRE = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    	return emailRE.test(emailStr);
    }    
    //
    function GetParamFromName(param) {
        var q = document.location.search || document.location.hash;
        if (param == null) { return q; }
        if (q) {
            var pairs = q.substring(1).split("&");
            for (var i = 0; i < pairs.length; i++) {
                if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                    return pairs[i].substring((pairs[i].indexOf("=") + 1));
                }
            }
        }
    }
    checkBrower();