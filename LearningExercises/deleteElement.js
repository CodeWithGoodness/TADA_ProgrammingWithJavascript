function deleteElement(arr, element){
    for(var i = 0; i < arr.length; i++){
        if (element == arr[i] ){
            arr.splice(i, 1);
            console.log(arr)
        }
    }
    
}

var arr = ["apple", "Banana", "Mango", "Pineapple", " Berry"]
deleteElement(arr, "Banana")
