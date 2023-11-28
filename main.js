/**
 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
**/

//Parameter - true, false, null, undefined will be given

//return to the console

//example [true,  true,  true,  false,

//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true] should return 17

//Psuedo code

function countSheeps(sheep) {
    let total = 0
    for (let x = 0; x <= sheep.length; x++){
        if (sheep[0] === true){
            total =+ total
        } else (
            total = total
        )
        return total
    }
    return
  }

  console.log(countSheeps([true, true]))

  //the answer of what i was trying to do is below

  /**
 function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;
  
  for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;
      
  return num;
}  
**/