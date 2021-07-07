const students = [
  { name: 'Oci', age: 20 },
  { name: 'Bob', age: 21 },
  { name: 'Jane', age: 23 },
]

function start() {
  // get the reference for the body
  var mybody = document.getElementsByTagName('body')[0]

  // creates <table> and <tbody> elements
  mytable = document.createElement('table')
  mytablebody = document.createElement('tbody')

  // creating all cells
  for (var j = 0; j < 3; j++) {
    // creates a <tr> element
    mycurrent_row = document.createElement('tr')

    for (var i = 0; i < 1; i++) {
      // creates a <td> element
      mycurrent_cell = document.createElement('td')
      // creates a Text Node
      currenttext = document.createTextNode(
        'No.' + j + ' ' + students[j].name + ', age: ' + students[j].age,
      )
      // appends the Text Node we created into the cell <td>
      mycurrent_cell.appendChild(currenttext)
      // appends the cell <td> into the row <tr>
      mycurrent_row.appendChild(mycurrent_cell)
    }
    // appends the row <tr> into <tbody>
    mytablebody.appendChild(mycurrent_row)
  }

  // appends <tbody> into <table>
  mytable.appendChild(mytablebody)
  // appends <table> into <body>
  mybody.appendChild(mytable)
  // sets the border attribute of mytable to 2;
  mytable.setAttribute('border', '2')
}

var flag = 1

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))

function myFunction() {
  var total = 0
  document.getElementById('demo').innerHTML = 'Calculation start'
  if (flag === 1) {
    console.log('Calculation start')
    for (index = 0; index < students.length; index++) {
      let totalTemp = total + students[index].age
      total = totalTemp
    }
    let avg = total / students.length

    wait(5000).then(() => {
      console.log('age is ' + avg)
      document.getElementById('demo').innerHTML = 'The average result: ' + avg
      flag = -1
    })
    console.log('second call started')
    wait(2000).then(() => {
      console.log('second call finished')
      console.log('third call started')
      wait(5000).then(() => {
        console.log('third call finished')
      })
    })
  } else {
    console.log('back to calculate')
    document.getElementById('demo').innerHTML = "Let's calculate the age"
    flag = 1
  }
}
