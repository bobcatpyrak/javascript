function loaded()
{
    let htmlctrl = document.getElementById("name");
    htmlctrl.value = "Greg";
}

function buttonClicked()
{
    let name = document.getElementById("name").value;
    console.log("The name is", name);
}

