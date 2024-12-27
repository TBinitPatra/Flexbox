const $Game_levels = [
    {
      level: "1: Row Alignment",
      instructions: "Change 'flex-direction' to 'column' to arrange boxes vertically.",
      solution: "flex-direction:column;"
    },
    {
      level: "2: Align the Box",
      instructions: "Use 'justify-content: center' to align the box horizontally in the middle.",
      solution: "justify-content:center;"
    },
    {
      level: "3: Reverse Order",
      instructions: "Set 'flex-direction' to 'row-reverse' or 'column-reverse' to change box order.",
      solution: "flex-direction:row-reverse;"
    },
    {
      level: "4: Space Distribution",
      instructions: "Use 'justify-content' with 'space-between', 'space-around', or 'space-evenly' to distribute space.",
      solution: "justify-content:space-between;"
    },
    {
      level: "5: Align to Start",
      instructions: "Set 'align-items' to 'flex-start' for top alignment.",
      solution: "align-items:flex-start;"
    },
    {
      level: "6: Vertical Centering",
      instructions: "Combine 'align-items: center' and 'justify-content: center' to center boxes.",
      solution: "align-items:center;\njustify-content:center;"
    },
    {
      level: "7: Wrap Items",
      instructions: "Enable wrapping with 'flex-wrap: wrap' to move items to a new row or column.",
      solution: "flex-wrap:wrap;"
    },
    {
      level: "8: Complex Alignment",
      instructions: "Combine 'align-items', 'justify-content', and 'flex-wrap' for intricate layouts.",
      solution: "align-items:center;\njustify-content:space-evenly;\nflex-wrap:wrap;"
    }
  ];
  

let currentLevel = 0;

const interface = document.getElementById('all');
const nextBtn = document.getElementById('next');

function interface_create(level_index){
    let x = $Game_levels[level_index]
    interface.innerHTML = `<div class="game">
        <div class="display"> 
            <div class="display-0" id="display-0" style="${x.solution}">
                <div class="box1 element">1</div>
                <div class="box2 element">2</div>
                <div class="box3 element">3</div>
            </div>
        </div>
        <!-- Center Part -->
        <div class="center-part">
            <div class="code">
                <h1 class="level">Level - <span>${x.level}</span></h1>
                <p>${x.instructions}</p>
                </div>
            <div class="coding">
                <div class="lines">
                    <ul class="lines-ul">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>                        
                    </ul>
        <pre class="coding-pre">#pond {
      display: flex;
        <textarea name="code" id="textarea" cols="30" rows="3"></textarea>
      }
                </pre>
                </div>
            </div>
        </div>
    </div>`;
}
const textarea = document.getElementById('textarea');
const popup_close = document.getElementById("close-popup-btn")
const show = document.getElementById("popup")


interface_create(currentLevel)
nextBtn.addEventListener('click', () => {
    const userInput = document.getElementById('textarea').value.split(' ').join('');
    const solution = $Game_levels[currentLevel].solution;

    if (userInput == solution) {         
        show.classList.add("show-popup"); 
        currentLevel++
        if (currentLevel < $Game_levels.length) {
            interface_create(currentLevel); 
        } else {
            alert('Congratulations! You completed all levels!'); 
            nextBtn.disabled = true; 
        }
    } else {
        alert('Incorrect! Try again.'); 
    }
});

popup_close.addEventListener("click",() => show.classList.remove("show-popup"))


