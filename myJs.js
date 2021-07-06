const students = [
    { name: "Oci", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Jane", age: 23 }
];

function start() {
    // get the reference for the body
    var mybody = document.getElementsByTagName("body")[0];

    // creates <table> and <tbody> elements
    mytable = document.createElement("table");
    mytablebody = document.createElement("tbody");

    // creating all cells
    for (var j = 0; j < 3; j++) {
        // creates a <tr> element
        mycurrent_row = document.createElement("tr");

        for (var i = 0; i < 1; i++) {
            // creates a <td> element
            mycurrent_cell = document.createElement("td");
            // creates a Text Node
            currenttext = document.createTextNode("No." + j + " " + students[j].name + ", age: " + students[j].age);
            // appends the Text Node we created into the cell <td>
            mycurrent_cell.appendChild(currenttext);
            // appends the cell <td> into the row <tr>
            mycurrent_row.appendChild(mycurrent_cell);
        }
        // appends the row <tr> into <tbody>
        mytablebody.appendChild(mycurrent_row);
    }

    // appends <tbody> into <table>
    mytable.appendChild(mytablebody);
    // appends <table> into <body>
    mybody.appendChild(mytable);
    // sets the border attribute of mytable to 2;
    mytable.setAttribute("border", "2");
}

var flag = 1;

function myFunction() {
    var total = 0;
    if (flag === 1) {
        for (index = 0; index < students.length; index++) {
            console.log(students[index]);
            let totalTemp = total + students[index].age;
            total = totalTemp;
        }
        let avg = total / students.length;
        console.log("ini avg skrg");
        console.log(avg);

        document.getElementById("demo").innerHTML = "Ini rata-ratanya: " + avg;
        flag = -1;
    } else {
        document.getElementById("demo").innerHTML = "No result... again";
        flag = 1;
    }
}

document.getElementById('btn-submit').onclick = function() {
    alert('click!')
}
