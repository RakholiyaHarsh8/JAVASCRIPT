 const name = "Harsh"
 const repoCount = 50

 //console.log(name + repoCount + " value");

 console.log('Hello my name is ${"name"} and my repo count is ${"repoCount"}');
 
 const gamename  = new String("Chess")

 const gameName = new String('RaholiyaHarsh-hr-com')

 console.log(gamename[0]);
 console.log(gamename.__proto__);


 //Method
 console.log(gamename.length); //Length Count
 console.log(gamename.toUpperCase()); //Uppercase 
 console.log(gamename.charAt(3));  //indexing char Check
 console.log(gamename.indexOf('e')); // Cahr to check to Number
 

 //Nagateve Value No Aapi Sakay -> substring
 const newString = gameName.substring(0, 4) 
 console.log(newString);


 //Nagative Value Aapi sakay -> Slice Ma
 const anotherString = gameName.slice(-13, 4)
 console.log(anotherString);
 
 const newString1 = "  harsh  " 
 console.log(newString1); //Without trim
 console.log(newString1.trim()); //with trim Space Remove kare
 

 const url = "https://harsh.com/harsh%20rakholiya" //
 console.log(url.replace('%20', '-')) //replace thi Change Kari Sakay Url no Data (%20)

 console.log(url.includes('harsh'))
 console.log(url.includes('kano'))


console.log(gameName.split('-')); 


  

 
 

 
 
 
 
 