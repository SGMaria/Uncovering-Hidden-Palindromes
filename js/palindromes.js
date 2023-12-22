

function get_substrings(cad){

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

var cad = "madam";

console.log(is_palindrome(cad));