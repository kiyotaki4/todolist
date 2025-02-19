const buttonh2 = document.getElementById("buttonh2");
const inputh2 = document.getElementById("inputh2");
const containerh2 = document.getElementById("containerh2");

//addevent for buttonh2 buttonh2 script
buttonh2.addEventListener("click",function(){
    //check for empty value
    if(inputh2.value==="")return;
    //div creation(not containerh2)
    const jelly=document.createElement("div");
    jelly.style.margin="10px 0px 0px 0px"

    const jellyContent=document.createElement("p");
    jellyContent.textContent=inputh2.value;
    jellyContent.style.marginLeft="9px";
    jellyContent.style.color="#fff";
    const removeButton= document.createElement("button");
    removeButton.textContent="remove";
    removeButton.classList.add("removeButtonh2");
    removeButton.style.padding="3px";

    const strikeButton = document.createElement("button");

    strikeButton.textContent="strike";
    strikeButton.style.padding="3px";

    //removebutton logic
    removeButton.addEventListener("click",function(){
        jelly.remove();
    })
    strikeButton.addEventListener("click",function(){
        if(jellyContent.style.textDecoration==="line-through"){
            strikeButton.textContent="strike";
            jellyContent.style.textDecoration="none"
        }
        else {
        strikeButton.textContent="unstrike";
        jellyContent.style.textDecoration="line-through"

        }

    })

    //jelly flex display css settings
    jelly.style.display="flex";
    jelly.style.alignItems="center";
    //jelly fill by content created upper
    jelly.appendChild(strikeButton);

    jelly.appendChild(jellyContent);
    jelly.appendChild(removeButton);

    //final operation its add that div
    containerh2.appendChild(jelly);
    inputh2.value="";
})