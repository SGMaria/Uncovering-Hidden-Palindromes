function init(){
    let string = document.getElementById("input_for_string").value;
    get_substrings(string);
    table_list();
}

function table_list(){
    let table = document.getElementById("results");
    let list = show_saved();
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(0);
    cell1.innerHTML = list;
    cell2.innerHTML = document.getElementById("input_for_string").value;
}

document.getElementById("start").addEventListener("click", init);