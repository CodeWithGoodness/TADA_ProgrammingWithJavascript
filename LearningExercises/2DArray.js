// function printArray(row, col){
//     for(var i = row[0]; i <row; i++){
//         for(var j = col[0]; i< col; j++){
//             console.log()
//         }
//     }

// }

function printArray(arr) {
    for (var i=0;i<arr.length;i++){
      for(var j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
      }   
    }
  }
  var arr = [[1, 2],
             [3, 4],
             [5, 6]];
  
  printArray(arr) //1 2 3 4 5 6