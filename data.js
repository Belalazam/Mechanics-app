needhelp=["problem: engine not working contact:911", "problem: tire puncture contact: 121"];
helper=["Location: marawa  contact:111"];
localStorage.setItem("mechanic",JSON.stringify(helper));
localStorage.setItem("people",JSON.stringify(needhelp));
const inputcontact=document.getElementsByClassName("aa")[0];
const inputlocation=document.getElementsByClassName("ab")[0];
const bb=document.getElementById("BB");
function assemble(){
      const z=localStorage.getItem("mechanic");
      const zz=JSON.parse(z);    
      zz.push("Location: " + inputlocation.value +"  ||  "+ "contact : " + inputcontact.value);
      localStorage.setItem("mechanic",JSON.stringify(zz));
      location.href='detail.html';
}
function xyz(){
      const z=localStorage.getItem("people");
      const zz=JSON.parse(z);  
      zz.push("Problem: " + inputlocation.value+ "  ||  " + "contact : " + inputcontact.value)
      localStorage.setItem("people",JSON.stringify(zz));
      location.href='detail1.html';
}
function help(){
      const myDiv=document.getElementById('para');
      myDiv.innerText="";
      var z=localStorage.getItem("people");
      var zz=JSON.parse(z);
      for(let i=0;i<zz.length;i++)
      {
            myDiv.innerHTML+="<li>" + zz[i] + "</li>";
      }
}
function abc()
{
      const myDiv=document.getElementById('para2');
      myDiv.innerText="";
      var z=localStorage.getItem("mechanic");
      var zz=JSON.parse(z);
      for(let i=0;i<zz.length;i++)
      {
            myDiv.innerHTML+="<li>" + zz[i] + "</li>";
      }
}
