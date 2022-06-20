import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assigment3';
  userInput: number = 0;
  btnclick = false;
  generatePyramid() {
    this.btnclick = !this.btnclick
    var totalNumberofRows = this.userInput;
    var output = '';
    console.log('3.1')
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= i; j++) {
        output += '*';
      }
      console.log(output);
      output = '';
    }
    output = ''
    //var output3_2 = '';
    console.log('3.2')
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= totalNumberofRows - i; j++) {
        output += ' ';
      }
      for (var k = 1; k <= i; k++) {
        output += '*';
      }
      output += '\n';
    }
    console.log(output);

     output = "";
    console.log('3.3')
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= totalNumberofRows - i; j++) {
        output += " ";
      }
      for (var k = 0; k < 2 * i - 1; k++) {
        if (i === 1) {
          output += "*";
        }
        else {
          if (k === 0 || k === 2 * i - 2) {
            output += "*";
          }
          else {
            output += " ";
          }
        }
      }
      output += "\n";
    }
    console.log(output);
    output = "";
    console.log('3.4')
    for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= totalNumberofRows; j++) {
          if (i == j || i+j == (totalNumberofRows + 1 ))
          output +="*";
            else
            output += " ";
      }
      output += "\n"; 
  }
  console.log(output);
  output = "";
  console.log('3.5')
for (let i = 1; i <= totalNumberofRows; i++) {

  for (let j = totalNumberofRows; j > i; j--) {
    output += " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    output += "*";
  }
  output += "\n";
}

for (let i = 1; i <= totalNumberofRows - 1; i++) {

  for (let j = 0; j < i; j++) {
    output += " ";
  }
  for (let k = (totalNumberofRows - i) * 2 - 1; k > 0; k--) {
    output += "*";
  }
  output += "\n";
}
console.log(output);
output = "";
console.log('3.6')
for (let i = 1; i <= totalNumberofRows; i++) {
  for (let j = totalNumberofRows; j > i; j--) {
    output += "A";
  }
  // for (let k = 0; k < i * 2 - 1; k++) {
  //   if (k === 0 || k === 2 * i - 2) {
  //     output += "*";
  //   }
  //   else {
  //     output += "E";
  //   }
  // }
  for (let k = 0; k < i * 2-1 ; k++) {
    if (k === 0 || k === 2 * i - 2) {
      output += "*";
    }
    else {
      output += "E";
    }
  }
  for (let j = totalNumberofRows; j > i; j--) {
    output += "B";
  }
  output += "\n";
}
for (let i = 1; i <= totalNumberofRows - 1; i++) {
    for (let j = 0; j < i; j++) {
      output += "C";
    }
    for (let k = (totalNumberofRows - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (totalNumberofRows - i) * 2 - 1) {
        output += "*";
      }
      else {
        output += "E";
      }
    }
    for (let j = 0; j < i; j++) {
      output += "D";
    }
    output += "\n";
  }
console.log(output);
}}

