function bodyFuncs()
{
    window.onload = navBar();
}

function SalesInfo()
{
    window.onclick = ShowSales_1();
    window.onclick = ShowSales_2();
}

function navBar()
{
    document.getElementById("Home").innerHTML = "Home";
    document.getElementById("Sales").innerHTML = "Sales";
    document.getElementById("Contact").innerHTML = "Contact";
}

function navHomeon()
{
    // setting variables for each category
    const Home = document.getElementById("Home");
    const Sales = document.getElementById("Sales");
    const Contact = document.getElementById("Contact");

    //Trigger the mouseover for each tab
        //Home
    Home.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
        //Sales
    Sales.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
        //Contact
    Contact.addEventListener("mouseover", (event) =>
    {
        event.target.style.backgroundColor = "blue";
    })
}

function navMouseoff()
{
    // setting variables for each category
    const Home = document.getElementById("Home");
    const Sales = document.getElementById("Sales");
    const Contact = document.getElementById("Contact");

    //Trigger the mouseover for each tab
        //Home
    Home.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "rgb(8, 113, 199)";
    })
        //Sales
    Sales.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "rgb(8, 113, 199)";
    })
        //Contact
    Contact.addEventListener("mouseleave", (event) =>
    {
        event.target.style.backgroundColor = "rgb(8, 113, 199)";
    })
}

function ShowSales_1()
{
    document.getElementById("Sale_1").innerHTML = "Sale Package 1#:" +
    "<br>This Package Contains:" +
    "<br> •VPS" +
    "<br> • Full Support 24/7"+
    "<br> • Administrator Panel";
    document.getElementById("Sale_1").style.width = "200px";
    document.getElementById("Sale_1").style.float = "left";
    document.getElementById("Sale_1").style.height = "200px";
    document.getElementById("Sale_1").style.margin = "100px";
    document.getElementById("Sale_1").style.border = "2px solid black";
    document.getElementById("Sale_1").style.borderRadius = "10%";
    document.getElementById("Sale_1").style.textAlign = "center";
}

function ShowSales_2()
{
    document.getElementById("Sale_2").innerHTML = "Sale Package 2#:" +
    "<br>This Package Contains:" +
    "<br> •VPS" +
    "<br> • Full Support 24/7";
    document.getElementById("Sale_2").style.width = "200px";
    document.getElementById("Sale_2").style.float = "right";
    document.getElementById("Sale_2").style.height = "200px";
    document.getElementById("Sale_2").style.margin = "100px";
    document.getElementById("Sale_2").style.border = "2px solid black";
    document.getElementById("Sale_2").style.borderRadius = "10%";
    document.getElementById("Sale_2").style.textAlign = "center";
}