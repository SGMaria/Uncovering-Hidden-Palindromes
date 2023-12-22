function init(){
    let string = document.getElementById("input_for_string").value;
    get_substrings(string);
}

document.getElementById("start").addEventListener("click", init);