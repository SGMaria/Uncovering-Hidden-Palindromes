function init(){
    let string = document.getElementById("input_for_string").value;
    get_substrings(string);
    table_list();
}

function table_list(){
    let table = document.getElementById("results");
    console.log(table);
    table = table.getElementsByTagName("tbody")[0];
    console.log(table);
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
    let new_string = '';
    string.forEach(pali => {
        if (new_string == ''){
            new_string = '["' + pali;
        } else{
            new_string = new_string + ', "' + pali + '"';
        }
    });
    new_string = new_string + "]";
    return new_string;
}

document.getElementById("start").addEventListener("click", init);