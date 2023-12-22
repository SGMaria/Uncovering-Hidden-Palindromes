

function get_substrings(cad){
    for (let i = 0; i < cad.length; i++) {
        let sub_string = "";
        for (let j = i; j < cad.length; j++) {
            sub_string = sub_string + cad[j];
            if (is_palindrome(sub_string)){
                save_palindrome(sub_string);
            }
        }
    }

}

function lowercase_cad(cad){
    let new_cad = cad.toLowerCase();
    return new_cad;
}

function trim_cad(cad){
    var punctuation = /[\.,¿?¡!;@#$%^&*()\[\] ]/g;
    var new_cad = cad.replace(punctuation, "");
    return new_cad;
}

function is_palindrome(cad){
    let flag = true;
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] == cad[cad.length - i - 1]){
            flag = true;
        } else{
            flag = false;
            return flag;
        }
    }
    return flag;
}

var a = {};

function save_palindrome(cad){
    a[cad] = "random value";
}

function show_saved(){
    console.log(a);
    for(var key in a) {
        //var value = a[key];
        console.log(key);
    }
}

var cad = "noon";

get_substrings(cad);
show_saved();
//console.log(is_palindrome(cad));