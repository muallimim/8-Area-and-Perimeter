document.getElementById("trianglePerimeter").addEventListener("click", trianglePerimeter);

function triangleArea(){
    event.preventDefault();
}



function trianglePerimeter(){
    event.preventDefault();

    var side1;
    var side2;
    var side3;
    var perimeter;

    side1 = document.getElementById("side1triangle").value;
    side2 = document.getElementById("side2triangle").value;
    side3 = document.getElementById("side3triangle").value;

    perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);

    report = "Kenarları " + side1 + ", " + side2 + " ve " + side3 
    + " olan üçgenin çevresi: " + perimeter;

    document.getElementById("result").innerHTML = report;

}