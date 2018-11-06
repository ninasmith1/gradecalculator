var count = 1;

function calculateCurrentGrade(){
    var categoryGrades = 0;
    var categoryWeight = 0;
    var gradesArray = 0;
    var gradesInt = 0;
    var average = 0;
    var weightPercent = 0;
    var categoryGrade = 0;

    var totalGrade = 0;
    for(var i = 0; i < count; i++){
        categoryGrades = document.getElementById("grades" + i).value;
        categoryWeight = document.getElementById("weight" + i).value;

        gradesArray = categoryGrades.split(",");
        gradesInt = convertArrayStringToNumber(gradesArray);
        average = averageArray(gradesInt);

        weightPercent = categoryWeight / 100;
        categoryGrade = weightPercent * average;

        totalGrade += categoryGrade;
    }
    document.getElementById("currentGrade").innerHTML = "Your current grade is " + totalGrade + "%.";
    return totalGrade;
}

function convertArrayStringToNumber(grades){
    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
    return grades;
}

function averageArray(grades){
    var sum = 0;

    for(var i = 0; i < grades.length; i++){
        sum = sum + grades[i];
    }
    return sum/grades.length;
}

function calculateGradeNeeded(){
    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var currentGrade = calculateCurrentGrade();

    var currentWeight = 1 - (finalWeight/100);

    var gradeWeight = currentGrade * currentWeight

    var finalGradeRequired = (desiredGrade - gradeWeight) / (finalWeight/100);

    document.getElementById("gradeNeeded").innerHTML = "You need a " + finalGradeRequired + "% on the final to get a " + desiredGrade + "% in the class.";

}

function addRow(){
    if(count <= 5){
        var titleInput = document.getElementById("categoryTitle").value;
        var gradesTitle = document.createElement("th");
        var weightTitle = document.createElement("th");

        var labelRow = document.createElement("tr");

        gradesTitle.innerHTML = titleInput + " Grades";
        weightTitle.innerHTML = titleInput + " Weight";

        labelRow.appendChild(gradesTitle);
        labelRow.appendChild(weightTitle);

        document.getElementById("table1").appendChild(labelRow);

        var category = document.createElement("tr");
        var grades = document.createElement("td");
        var weight = document.createElement("td");

        var input1 = document.createElement("input");
        var input2 = document.createElement("input");

        grades.appendChild(input1);
        weight.appendChild(input2);

        category.appendChild(grades);
        category.appendChild(weight);
        document.getElementById("table1").appendChild(category);

        input1.id = "grades" + count;
        input2.id = "weight" + count;

        gradesTitle.setAttribute("class", "titleColor");
        weightTitle.setAttribute("class", "titleColor");

        input1.setAttribute("class", "inputColor");
        input2.setAttribute("class", "inputColor");


        count++;
    }else{
        alert("Too many categories. Please refresh and try again.");
    }
}