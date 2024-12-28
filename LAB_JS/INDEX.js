
// CHECKING FOR THE LEAP YEAR  
//   y = prompt("Enter your year to check leap year")
//   if ((y % 400 == 0) ||(y % 100 != 0) && (y % 4 == 0)){
//     alert(y+ " is a Leap Year")
//   }
//   else{
//     alert(y + " is not a Leap Year")
//   }


//Convert into string 
// mycolor = ["Red","Green","White", "Black"];
// strings = mycolor + ""
// alert(strings);


// mycolor = ["Red","Green","White", "Black"];
// let string = ' ';
// for(let i = 0; i < mycolor.length; i++){
//   string += mycolor[i];
//   string += " ";
// }
// alert("\"" + string + "\"" )


//Exercise 3
// {
//     const d = Date()
//     let hour = d.getHours();
//     if((hour >= 5) && (hour <=12))
//     {
//         confirm("Good Morning")
//     }
//     else if (hour >= 13 && hour <= 18) 
//     {
//         confirm("Good Afternoon")
//     } 
//     else 
//     {
//         confirm("Good Night")    
//     }
// }

function encryption_txt()
{
    const txt = document.getElementById("plain_txt").value
    let shift = document.getElementById("shift_value1").value
    let result = ""
    shift = shift % 26;
    for (let i = 0; i < txt.length; i++) 
    {
        let char = txt[i];
        let charcode = txt.charCodeAt(i);

        // Check if the character is a letter (Upper)
        if (char >= 'A' && char <= 'Z') 
        {
            result += String.fromCharCode(((charcode - 65 + shift) % 26) + 65);
        } 
        // Check if the character is a letter (lower)
        else if (char >= 'a' && char <= 'z') 
        {
            result += String.fromCharCode(((charcode - 97 + shift) % 26) + 97);
        } 
        else if (char >= '!' && char <= '/') 
        {
            result += String.fromCharCode(((charcode - 47 + shift) % 14) + 47);
        } 
        else 
        {
            result += char;
        }
    }
    document.getElementById("encrypt_txt1").value = result;
}


function decryption_txt()
{
    const txt = document.getElementById("encrypt_txt2").value
    let shift = document.getElementById("shift_value2").value
    let result = ""
    shift = shift % 26;
    for (let i = 0; i < txt.length; i++) 
    {
        let char = txt[i];
        let charcode = txt.charCodeAt(i);

        // Check if the character is a letter (Upper)
        if (char >= 'A' && char <= 'Z') 
        {
            result += String.fromCharCode(((charcode - 65 - shift + 26 ) % 26) + 65);
        // Check if the character is a letter (lower)
        } 
        else if (char >= 'a' && char <= 'z') 
        {
            result += String.fromCharCode(((charcode - 97 - shift + 26) % 26) + 97);
        } 
        else 
        {
            result += char;
        }
    }
    document.getElementById("decrypt_txt2").value = result;
}







