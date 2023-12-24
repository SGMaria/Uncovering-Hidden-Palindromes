function init(){
    let string = document.getElementById("input_for_string").value;
    get_substrings(string); // from palindromes.js
    table_list();
    clear_input();
}

function table_list(){
    let table = document.getElementById("results");
    table = table.getElementsByTagName("tbody")[0];
    let list = show_saved();
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("input_for_string").value;
    cell2.innerHTML = list.length;
    cell3.innerHTML = spaces(list);
}

function spaces(string){
    let new_string = '[';
    string.forEach(pali => {
        if (new_string == '['){
            new_string = new_string + pali;
        } else{
            new_string = new_string + ', "' + pali + '"';
        }
    });
    new_string = new_string + "]";
    return new_string;
}

function clear_input(){
    document.getElementById("input_for_string").value = "";
    enable_button();
}

function enable_button(){
    let string = document.getElementById("input_for_string").value;
    if (string == ""){
        document.getElementById("start").disabled = true;
    } else {
        document.getElementById("start").disabled = false;
    }
}

function keyup_enter(e){
    if (e.code === 'Enter') {
        document.getElementById("start").click();
    }
}

document.getElementById("start").addEventListener("click", init);
document.getElementById("input_for_string").addEventListener("keyup", keyup_enter);
document.getElementById("input_for_string").addEventListener("keyup", enable_button);

