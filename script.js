// Using Callback Hell:
var countdown = document.querySelector("#countdown") 
var c = 10;
setTimeout( ()=> { 
    console.log("cd", c) 
    countdown.innerText = c ;
    c--;  
    setTimeout( ()=> { 
        console.log("cd", c) 
        countdown.innerText = c ;
        c--;  
        setTimeout( ()=> { 
            console.log("cd", c) 
            countdown.innerText = c ;
            c--;  
            setTimeout( ()=> { 
                console.log("cd", c) 
                countdown.innerText = c ;
                c--;  
                setTimeout( ()=> { 
                    console.log("cd", c) 
                    countdown.innerText = c ;
                    c--;  
                    setTimeout( ()=> { 
                        console.log("cd", c) 
                        countdown.innerText = c ;
                        c--;  
                        setTimeout( ()=> { 
                            console.log("cd", c) 
                            countdown.innerText = c ;
                            c--;  
                            setTimeout( ()=> { 
                                console.log("cd", c) 
                                countdown.innerText = c ;
                                c--;  
                                setTimeout( ()=> { 
                                    console.log("cd", c) 
                                    countdown.innerText = c ;
                                    c--;  
                                    setTimeout( ()=> { 
                                        console.log("cd", c) 
                                        countdown.innerText = c ;
                                        c--;  
                                        setTimeout( ()=> { 
                                            console.log("indep")
                                            countdown.innerText = "HAPPY INDEPENDENCE DAY";  
                                            countdown.style.color = "red";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


// // Using setInterval :
// var cdFunc =  setInterval(()=> {   
//     console.log("cd", c) 
//     if(c == 0 ) {
//         console.log("indep")
//         countdown.innerText = "HAPPY INDEPENDENCE DAY"; 
//      //   countdown.style.fontSize = "2rem"; 
//         countdown.style.color = "red";
//         clearInterval(cdFunc);
//     }    
//     else {
//         countdown.innerText = c ;
//         c--;  
//     }     
    
// },1000)  