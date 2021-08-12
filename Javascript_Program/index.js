var i=0;
var correctanswer=0;
generate(0);



function generate(index)
{
    document.getElementById("question").innerHTML=jsonData[index].q;
    document.getElementById("optt1").innerHTML=jsonData[index].opt1;
    document.getElementById("optt2").innerHTML=jsonData[index].opt2;
    document.getElementById("optt3").innerHTML=jsonData[index].opt3;
}



function checkAnswer()
{
   // let correctanswer=0;
    if(document.getElementById("opt1").checked && jsonData[i].opt1===jsonData[i].answer)
    {
        correctanswer++;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2===jsonData[i].answer)
    {
        correctanswer++;
    }
    
    if(document.getElementById("opt3").checked && jsonData[i].opt3===jsonData[i].answer)
    {
      
        correctanswer++;
    }
    i++;
    
    if(jsonData.length-1<i)
    {
        document.write("<h1><pre>                                               Quiz Completed</pre></h1>")
        document.write("<hr>");
        document.write("<br><h1>Your Score is:"+correctanswer+"/5"+"</h1>");
        document.write("<br><hr>");
        var btn=document.createElement("button");
        btn.innerHTML="Preview";
        btn.style.height=20;
        btn.addEventListener("click",display);
        function display()
        {
            document.write("<br>");
            for(let x=0;x<jsonData.length;x++)
            {
                document.write("<br><br><h1>"+(x+1)+"."+" "+jsonData[x].answer+"</h1>");
                
            }
        }   
        document.body.appendChild(btn);
    }
    generate(i);
}





