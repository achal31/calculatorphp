$(document).ready(function() {
    var variable1 = "";
    var variable2 = "";
    var operator = "";

    /*-------Function Called on The clicked Of the buttton--------*/
    $(".number").click(function() {

        /*------Conditon to checked whether the input is number or not-------*/
        if ($.isNumeric(this.value) == true) {

            /*-------Condition to intialize 2nd variable-----------*/
            if (operator != "") {
                variable2 += this.value;
                $("#panel").val(variable2);
            }
            /*--------Condition to intialize 1st variable------------*/
            else {
                variable1 += this.value;
                $("#panel").val(variable1);
            }
        } else {
            /*-----------Condition To set operator value----------------*/
            if (operator == "") {
                operator = this.value;
            } else {
                /*------Condition to set operator when it is clicked twice or more times------*/
                if (variable2 == "") {
                    operator = this.value;
                } else {

                    /*------------Initializing the data string--------------*/
                    var dataString = 'temp1=' + variable1 + '&temp2=' + variable2 + '&operation=' + operator;


                    if (this.value != 'equal') {
                        operator = this.value;
                    } else {
                        operator = "";
                    }

                    $.ajax({
                        type: "POST",
                        url: "file.php",
                        data: dataString,
                        cache: false,
                        success: function(result) {
                            variable1 = result;
                            $("#panel").val(result);
                            variable2 = "";
                        }
                    });
                }
            }
        }

    });

    $("button[value='C']").click(function() {
        variable1 = "";
        variable2 = "";
        operator = "";
        $("#panel").val("");
    })
});