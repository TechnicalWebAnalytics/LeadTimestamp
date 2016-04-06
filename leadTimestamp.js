<script>
// PLEASE ONLY USE JAVASCRIPT!
// document.querySelector('yourElement');

// generates a timestamp if one isn't available
// adds timestamp ( unique ID ) to hidden form field
// option to generate hidden form field if one does not exist
// option to append generated form field to existing element

function timestampFormFill( 
    formFieldSelector, // the form field you want to insert the TID into
    appendSelector, // optional ( only works if failsafe is TRUE )
    failSafeSetting, // True / False
    appendSetting // True / False
    ){
// ------------------------------------------- function

var failSafe = failSafeSetting; // will generate a form field if one isn't available
var append = appendSetting; // choose wether the formfield should be appended to a master form

// ============= COOKIES ============= //

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

            console.log("leadTimestamp generated");
        // ---------------------------------------- timestamp
    }

    var cookieTimestamp = getCookie("leadTimestamp");

// ============= FORM FILL ============= //

if( formFieldSelector != null ){
// ------------------------------------------------------------ check selector
// if selector exists

    // if timestamp does not exist in form field
    if(formFieldSelector.value.length <= 0){
    // --------------------------------------------- formfill
            // add timestamp to selector from cookie
            formFieldSelector.value = cookieTimestamp;
            console.log("leadTimestamp added to form");
    // --------------------------------------------- formfill    
    } else if(formFieldSelector.value.length > 0){
    // --------------------------------------------- value exists
        console.log("leadTimestamp exists in form")
    // --------------------------------------------- value exists    
    }
// ------------------------------------------------------------ check selector 
} else if( failSafe == true ){
    // ---------------------- failSafe
    if( formFieldSelector == null ){
        // --------------------------------------------------------- check selector
        // if selector does not exist     

        if( append == true ){
                // ------------------ append
                var inputLEAD = document.createElement("INPUT");
                appendSelector.appendChild(inputLEAD);
                inputLEAD.setAttribute("id", "field_transaction_id");
                inputLEAD.setAttribute("type", "hidden");    
                console.log("hidden form field appended to form");
                console.log("leadTimestamp added to form");        
                // ------------------ append
            } else {
                // ----- create in body            
                var inputLEAD = document.createElement("INPUT");
                document.body.appendChild(inputLEAD);
                inputLEAD.setAttribute("id", "field_transaction_id");
                inputLEAD.setAttribute("type", "hidden");
                console.log("hidden form field appended to body"); 
                console.log("leadTimestamp added to form");
                // ----- create in body
            }

            document.getElementById('field_transaction_id').value = cookieTimestamp;
        // --------------------------------------------------------- check selector
    }
    // ---------------------- failSafe
}
// ------------------------------------------- function
}
</script>
