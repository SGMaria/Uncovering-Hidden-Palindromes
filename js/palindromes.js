function get_substrings(string){
    let orginal_string = string;
    string = clean_string(string);
    renew_dictionary();
    for (let i = 0; i < string.length; i++) {
        let sub_string = "";
        for (let j = i; j < string.length; j++) {
            sub_string = sub_string + string[j];
            if (is_palindrome(sub_string)){
                save_palindrome(sub_string, orginal_string);
            }
        }
    }
}

function clean_string(string){
    string = lowercase_string(string);
    string = trim_string(string);
    return string;
}

function lowercase_string(string){
    let new_string = string.toLowerCase();
    return new_string;
}

function trim_string(string){
    var punctuation = /[\.,¿?¡!;@#$%^&*"()\[\] ]/g;
    var new_string = string.replace(punctuation, "");
    return new_string;
}

function is_palindrome(string){
    let flag = true;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[string.length - i - 1]){
            flag = true;
        } else{
            flag = false;
            return flag;
        }
    }
    return flag;
}

var a = {};

function save_palindrome(sub_string, orginal_string){
    a[sub_string] = orginal_string;
}

function show_saved(){
    for(var key in a) {
        console.log(key);
    }
}

function renew_dictionary(){
    a = {};
}