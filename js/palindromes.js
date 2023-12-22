function get_substrings(string){
    string = clean_string(string);
    for (let i = 0; i < string.length; i++) {
        let sub_string = "";
        for (let j = i; j < string.length; j++) {
            sub_string = sub_string + string[j];
            if (is_palindrome(sub_string)){
                save_palindrome(sub_string);
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

function save_palindrome(string){
    a[string] = orginal_string;
}

function show_saved(){
    console.log(a);
    for(var key in a) {
        //var value = a[key];
        console.log(key);
    }
}

var orginal_string = "A man, a plan, a canal, Panama!";

get_substrings(orginal_string);
show_saved();
//console.log(is_palindrome(string));