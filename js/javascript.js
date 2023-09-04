function isEmail(email){ //Check for valid email addresses
	let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

$("#trial-btn").click(function(){
    $(".inputs input").each(function(){ // loop through all input fields
        if($(this).val()==""){ // check if each input field is empty
            $(this).parent().parent().addClass("error"); // if empty, add the ERROR class which will add the variuos error states/alerts
            if($(this).prop("id")=="email"){ //if the input field is the email field, set the appropriate alert
                $(this).parent().parent().children('small').html("Email cannot be empty");
            }
        }else{$(this).parent().parent().removeClass("error");}
    });

    if($("#email").val()!="" && isEmail($("#email").val())==false){ // Check for valid inputted email address
        $("#email").parent().parent().children('small').html("Looks like this is not an email");
        $("#email").parent().parent().addClass("error");
    }else if($("#email").val()!="" && isEmail($("#email").val())){$("#email").parent().parent().removeClass("error");}
});