const local =document.getElementById("result");

if (typeof(Storage) !== "undefined") {
    localStorage.setItem("name", "Johnie Black");
        localStorage.setItem("age", 20);
        localStorage.setItem("IsStudent", true);

    local.innerHTML = localStorage.getItem("name") +
    "<br>" + localStorage.getItem("age") + "<br>" 
    + localStorage.getItem("IsStudent") ;

}
else{
    local.innerHTML = "Sorry no web storage support";
}

document.getElementById("btn").addEventListener("click", function () {
    const button = document.getElementById("btn");
    button.classList.add("animate");
  });
  