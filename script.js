function getOld(){
                     return document.getElementById("old-value").innerText;
}
function printOld(num){
                      document.getElementById("old-value").innerText=num;
}
function getAnswer(){
                     return document.getElementById("answer-value").innerText;
}
function printAnswer(num){
                     if(num==" "){
                                           document.getElementById("answer-value").innerText=num;
                     }
                     else{
                              document.getElementById("answer-value").innerText=getFormattedNumber(num);
                    }
}
function getFormattedNumber(num){
                     if(num=="-"){
                                           return " ";
                     }
                       var n = Number(num);
                       var value = n.toLocaleString("en");
                       return value;
}
function reverseNumberFormat(num){
               return Number(num.replace(/,/g,' '));
}
var operator=document.getElementByClassName("operator");
for(var i=0; i<operator.length; i++){
                                                          operator[i].addEventListener('click',function(){
                                                                             if(this.id=="clear"){
                                                                                                              printold(" ");
                                                                                                              printanswer(" ");
                                                                                            }
                                                                             else if(this.id=="backspace"){
                                                                                     var answer=reverseNumberFormat(getanswer()).toString();
                                                                                                if(answer){
                                                                                                           answer=answer.substr(0,answer.length-1);
                                                                                                           printanswer(answer);
                                                                                                     }
                                                                                      }
                                                                                   else{
                                                                                            var answer=getanswer();
                                                                                            var old=getold();
                                                                                            if(answer==" "&&old!=" "){
                                                                                                   if(isNaN(old[old.length-1])){
                                                                                                                                      old=old.substr(0,old.length-1);
                                                                                                                          }
                                                                                                               }
                                                                                                     if(answer!==" " || old!=" "){
                                                                                                     answer=answer==" "?answer:reverseNumberFormat(answer);
                                                                                                              old=old+answer;
                                                                                                if(this.id=="="){
                                                                                                                      var result = eval(old);
                                                                                                                   printanswer(result);
                                                                                                                   printold(" ");
                                                                                                           }
                                                                                                  else{
                                                                                                           old=old+this.id;
                                                                                                           printold(old);
                                                                                                           printanswer(" ");
                                                                                                    }
                                                                                            }
                                                                                  }
                                                     });
}

var number= document.getElementByClassName("number");
for(var i=0; i<number.length; i++){
       number[i].addEventListener('click',function(){
                         var answer=reverseNumberFormat(getanswer());
                    if(answer!=NaN){
                                                 answer=answer+this.id;
                                                 printanswer(answer);
                                       }
                        });
  }

                                                                                                                   


