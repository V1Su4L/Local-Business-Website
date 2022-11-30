function bodyFuncs()
{
    window.onload = navBar();
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