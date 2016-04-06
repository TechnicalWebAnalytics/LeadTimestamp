// USE JAVASCRIPT SELECTOR QUERY ONLY!
// document.querySelector()

function timestampFormFill(formFieldSelector){
// ------------------------------------------- function
// generates a timestamp if one isn't available
// adds timestamp ( unique ID ) to hidden form field

    function getCookie(cname) {
        // ------------------------ getcookie
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
        // ------------------------ getcookie   
    }

    if( formFieldSelector.length > 0 || formFieldSelector != null ){
    // -------------------------------- check selector
    // if selector exists

    if(getCookie("leadTimestamp").length <= 0){
        // ---------------------------------------- timestamp   
            // Generate a timestamp id for this form page
            var leadTimestamp = new Date().getTime();

            // Set a cookie to hold the leadTimestamp value so we can retrieve on Thank You page

            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000*60*15;
            now.setTime(expireTime);
            document.cookie="leadTimestamp="+leadTimestamp+';expires='+now.toGMTString()+';path=/';

        // ---------------------------------------- timestamp
    }

    var cookieTimestamp = getCookie("leadTimestamp");

        // if timestamp does not exist in form field
        if(formFieldSelector.value.length <= 0){
        // --------------------------------------------- formfill
            // add timestamp to selector from cookie
            formFieldSelector.value = cookieTimestamp;
        // --------------------------------------------- formfill    
    }
    // -------------------------------- check selector 
}
// ------------------------------------------- function
}
