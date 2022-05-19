function limit(){
    let getLimit = document.getElementById('limiter').value;

    let setLimit = document.getElementById('num');

    setLimit.value = getLimit;
}

function limit2(){
    let getl = document.getElementById('num').value;

    let setl = document.getElementById('limiter');

    setl.value = getl;
}

function randomPassword(){

    var rangee = document.getElementById('num').value;
    var check1 = document.getElementById('chk1');
    var check2 = document.getElementById('chk2');
    var check3 = document.getElementById('chk3');
    var check4 = document.getElementById('chk4');

    var just = "";

    var randompass = "";
    var Cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var num = 1234567890;
    var special = "!@#$%^&*()_+-=`~{}[]\|;:></?";
    
    for (var i = 0; i < rangee; i++) {

        if (check1.checked) {
            randompass += Cap;
        }
        else { }
        if (check2.checked) {
            randompass += small;
        }
        else { }
        if (check3.checked) {
            randompass += special;
        }
        else { }
        if (check4.checked) {
            randompass += num;
        }
        just += randompass.charAt(Math.floor((Math.random() * randompass.length)));

    }

    document.getElementById('passfield').textContent = just;

}
        $(document).ready(function(){
            $('#copybtn').click(function(){
                $('#copycall').css("display","block").fadeOut(2000);
                // $('#copycall').slideUp(2000);
            });
        });

function copytoclip(){

    let data1 = document.getElementById('passfield').textContent;

    navigator.clipboard.writeText(data1);
}
