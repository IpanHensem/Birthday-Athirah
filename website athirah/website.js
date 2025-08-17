//buat platform
const sudoku = document.getElementById('grid');

let cells=[];

for (let i = 0; i < 81; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.contentEditable = true;
    cell.id = 'cell-' + (i+1);
    cells.push(cell);
    sudoku.appendChild(cell);
    }

    fetch("sudoku.json")
    .then(response => response.json())
    .then(data => { 
        document.getElementById("level").addEventListener('click', function(){
        if(level.value == "level1"){
            level1(data);
        }

        else if(level.value== "level2"){
            level2(data);
        }

        else if(level.value== "level3"){
            level3(data);
        }

        else if(level.value== "level4"){
            level4(data);
        }

        else if(level.value== "level5"){
            level5(data);
        }

        else if(level.value== "level6"){
            level6(data);
        }

        else if(level.value== "level7"){
            level7(data);
        }

        else if(level.value== "level8"){
            level8(data);
        }

        else if(level.value== "level9"){
            level9(data);
        }

        else if(level.value== "level10"){
            level10(data);
        }

       else if(level.value== "level11"){
            level11(data);
        }

    });
})
//function level////////////////////////////////////
    function level1(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[0].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[0].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[0].answer[i];
        }
    }

    function level2(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[1].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[1].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[1].answer[i];
        }
    }

    function level3(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[2].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[2].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[2].answer[i];
        }
    }

    function level4(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[3].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[3].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[3].answer[i];
        }
    }

    function level5(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[4].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[4].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[4].answer[i];
        }
    }

    function level6(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[5].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[5].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[5].answer[i];
        }
    }

    function level7(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[6].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[6].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[6].answer[i];
        }
    }

    function level8(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[7].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[7].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[7].answer[i];
        }
    }

    function level9(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[8].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[8].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[8].answer[i];
        }
    }

    function level10(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[9].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[9].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[9].answer[i];
        }
    }

    function level11(data){
        const text = document.getElementById("levelsini");
            text.textContent = data[10].name;

        for (let i = 0; i < 81; i++) {
            cells[i].textContent = data[10].puzzle[i];
        }

        for (let i = 0; i < 81; i++) {
            correctAnswer[i] = data[10].answer[i];
        }
    }


    //sampai sini///////////////////////////////


    let gridsss = document.querySelectorAll('div[id^="cell-"]');

    let correctAnswer = [""];

//tengok jawapan betulke x               
   document.getElementById('check').addEventListener('click', function(){
       gridsss.forEach((cell, index) => {
           if(cell.textContent.trim() == correctAnswer[index]){
               cell.style.backgroundColor = "green";
           }

           else{
               cell.style.backgroundColor = "red";
           }
       });
   });

   //reset balek
   document.getElementById("reset").addEventListener('click', function(){
       gridsss.forEach((cell) => {
           cell.textContent = '';
           cell.style.backgroundColor = "white";
       })
   })
    
    //mark each kotak

   function marking(){
    let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener('click', function(){
                if(cell.style.backgroundColor == "yellow"){
                    cell.style.backgroundColor = "white ";
                }

                else {
                    cell.style.backgroundColor = "yellow";
                }
            })
        }) 
    }
    document.getElementById("mark").addEventListener('click', function(){
        marking();
    })
   
    
    document.getElementById('save').addEventListener('click', function () {
    let save = [];

    gridsss.forEach(cell => {
        save.push(cell.textContent.trim());
    });

    // Check if board is completely empty
    let isEmpty = save.every(value => value === "");

    if (isEmpty) {
        alert("Nothing to save! The board is empty.");
        return; // stop here, don't save
    }

    // Save to localStorage only if not empty
    localStorage.setItem("save", JSON.stringify(save));
    alert("Progress saved!");
    console.log(save);
});

    // Auto-load when page opens
window.addEventListener("load", function () {
    let savedData = localStorage.getItem("save");

    // Only continue if there is saved data and it's not empty
    if (savedData && savedData !== "[]" && savedData !== "[\"\"]") {
        let loadGame = confirm("A saved game was found. Do you want to load it?");
        if (loadGame) {
            let cells = JSON.parse(savedData);
            gridsss.forEach((cell, index) => {
                cell.textContent = cells[index] || "";
            });
            alert("Game loaded!");
        } else {
            alert("Starting a new game!");
        }
    }
});
    
    //buat grid
    colValue=" ";
    rowValue=" ";
for(let i = 0; i < 9; i++)
{    
        colValue += "1fr " ;
        rowValue += "1fr ";
}
    sudoku.style.gridTemplateColumns = colValue;
    sudoku.style.gridTemplateRows = rowValue;

//warnakan grid
    
for(let i = 0 ; i < 81 ; i++)
{
    let color = document.getElementById(`cell-${i+1}`);
    if(i % 2 === 0)
    {
        color.style.backgroundColor = "#ffffffff";
    }

    else
    {
        color.style.backgroundColor = "white";
    }
}

//border


//make it playable
    