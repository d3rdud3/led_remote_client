function doAjaxCall(ident,url){
    $.ajax({
        url: url,
        error: function(){
            alert("LED Bettbeleuchtung nicht erreichbar")
        },
        success: function(){
            $(ident).removeClass("ui-btn-active");
        },
        timeout: 1000 // sets timeout to 3 seconds
    });
};

$(document).ready(function() {
    // ROW one
    //off
    $( "#1x3" ).click(function() {
      doAjaxCall("#1x3","http://ledremote:8444/off");
    });

    //on
    $( "#1x4" ).click(function() {
        doAjaxCall("#1x4","http://ledremote:8444/on");
    });

    //brightnessup
    $( "#1x1" ).click(function() {
        doAjaxCall("#1x1","http://ledremote:8444/brightnessup");
    });

    //brightnessdown
    $( "#1x2" ).click(function() {
        doAjaxCall("#1x2","http://ledremote:8444/brightnessdown");
    });

    //RED
    $( "#2x1" ).click(function() {
        doAjaxCall("#2x1","http://ledremote:8444/red");
    });

    //GREEN
    $( "#2x2" ).click(function() {
        doAjaxCall("#2x2","http://ledremote:8444/green");
    });

    //BLUE
    $( "#2x3" ).click(function() {
        doAjaxCall("#2x3","http://ledremote:8444/blue");
    });

    //WHITE
    $( "#2x4" ).click(function() {
        doAjaxCall("#2x4","http://ledremote:8444/white");
    });

    //REDone
    $( "#3x1" ).click(function() {
        doAjaxCall("#3x1","http://ledremote:8444/redone");
    });

    //GREENone
    $( "#3x2" ).click(function() {
        doAjaxCall("#3x2","http://ledremote:8444/greenone");
    });

    //BLUEone
    $( "#3x3" ).click(function() {
        doAjaxCall("#3x3","http://ledremote:8444/blueone");
    });

    //function1
    $( "#3x4" ).click(function() {
        doAjaxCall("#3x4","http://ledremote:8444/actionone");
    });

    //REDtwo
    $( "#4x1" ).click(function() {
        doAjaxCall("#4x1","http://ledremote:8444/redtwo");
    });

    //GREENtwo
    $( "#4x2" ).click(function() {
        doAjaxCall("#4x2","http://ledremote:8444/greentwo");
    });

    //BLUEtwo
    $( "#4x3" ).click(function() {
        doAjaxCall("#4x3","http://ledremote:8444/bluetwo");
    });

    //function2
    $( "#4x4" ).click(function() {
        doAjaxCall("#4x4","http://ledremote:8444/actiontwo");
    });

    //REDthree
    $( "#5x1" ).click(function() {
        doAjaxCall("#5x1","http://ledremote:8444/redthree");
    });

    //GREENthree
    $( "#5x2" ).click(function() {
        doAjaxCall("#5x2","http://ledremote:8444/greenthree");
    });

    //BLUEthree
    $( "#5x3" ).click(function() {
        doAjaxCall("#5x3","http://ledremote:8444/bluethree");
    });

    //function3
    $( "#5x4" ).click(function() {
        doAjaxCall("#5x4","http://ledremote:8444/actionthree");
    });

    //REDfour
    $( "#6x1" ).click(function() {
        doAjaxCall("#6x1","http://ledremote:8444/redfour");
    });

    //GREENfour
    $( "#6x2" ).click(function() {
        doAjaxCall("#6x2","http://ledremote:8444/greenfour");
    });

    //BLUEfour
    $( "#6x3" ).click(function() {
        doAjaxCall("#6x3","http://ledremote:8444/bluefour");
    });

    //function4
    $( "#6x4" ).click(function() {
        doAjaxCall("#6x4","http://ledremote:8444/actionfour");
    });


    //function4
    $("#setSunriseTime").click(function() {

        var value = $("#timebox").val();

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "http://ledremote:8444/sunrisetime",
            data: JSON.stringify({time: value}),
            error: function(err){
                alert(err)
            },
            success: function(){
                $("#setSunriseTime").removeClass("ui-btn-active");
            },
            dataType: "json",
            timeout: 1000
        });

    });
});
