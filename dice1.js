      var one = "f";
        var two = "s";
      function Add(){
        
         one = prompt("Enter player1 name:");
         two = prompt("Enter player2 name:");
        
         document.querySelector("h3#f").innerHTML=one;
         document.querySelector("h3#s").innerHTML=two;

      }
      function roll_1(){
        setTimeout(function(){
            
        var rand1=Math.floor(Math.random()*6)+1;
        var rand2=Math.floor(Math.random()*6)+1;
       document.querySelector(".img1").setAttribute("src","dice"+rand1+".png");
       document.querySelector(".img2").setAttribute("src","dice"+rand2+".png");
       if(rand1==rand2){
            document.querySelector("h1").innerHTML=`draw!`;
        }
        else if(rand1>rand2){
            document.querySelector("h1").innerHTML=`${one} won the match!`;
        }
        else {
            document.querySelector("h1").innerHTML=`${two} won the match!`;
        }
      
       
    },500);}

    
        

      