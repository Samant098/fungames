// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 500);
});

// Game Data
const games = [
    { name: 'Chess Pro', icon: '♟️', component: initChess },
    { name: 'Snake & Ladder', icon: '🐍', component: initSnakeLadder },
    { name: 'Ludo Classic', icon: '🎲', component: initLudo },
    { name: 'Tic Tac Toe', icon: '❌⭕', component: initTicTacToe },
    { name: 'Memory Cards', icon: '🃏', component: initMemory },
    { name: 'Sudoku', icon: '🧩', component: initSudoku },
    { name: '2048', icon: '🔢', component: init2048 },
    { name: 'RPS Pro', icon: '✂️', component: initRPS },
    { name: 'Darts Pro', icon: '🎯', component: initDarts },
    { name: 'Poker', icon: '♠️', component: initPoker }
];

// Initialize Game Grid
function initGameGrid() {
    const container = document.querySelector('.game-container');
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <h3>${game.icon} ${game.name}</h3>
            <p>Click to play</p>
        `;
        card.style.animationDelay = `${index * 0.1}s`;
        card.addEventListener('click', game.component);
        container.appendChild(card);
    });
}

// Game Initializers (Basic Implementations)
function initTicTacToe() {
    // Tic Tac Toe Implementation
    const gameWindow = window.open('', '_blank', 'width=600,height=600');
    gameWindow.document.write(`
        <style>
            .board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; width: 300px; }
            .cell { width: 100px; height: 100px; border: 2px solid #fff; display: flex; align-items: center; justify-content: center; font-size: 40px; cursor: pointer; }
        </style>
        <div class="board" id="board"></div>
        <script>
            let currentPlayer = 'X';
            const board = document.getElementById('board');
            
            // Create board
            for(let i = 0; i < 9; i++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.addEventListener('click', () => handleClick(cell));
                board.appendChild(cell);
            }
            
            function handleClick(cell) {
                if(!cell.textContent) {
                    cell.textContent = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        </\/script>
    `);
}

function initRPS() {
    // Rock Paper Scissors Implementation
    const choices = ['✊', '✋', '✌️'];
    const result = document.createElement('div');
    result.style.position = 'fixed';
    result.style.top = '50%';
    result.style.left = '50%';
    result.style.transform = 'translate(-50%, -50%)';
    result.style.background = 'rgba(0,0,0,0.9)';
    result.style.padding = '2rem';
    result.style.borderRadius = '15px';
    result.style.textAlign = 'center';
    
    const userChoice = choices[Math.floor(Math.random() * 3)];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    result.innerHTML = `
        <h2>${userChoice} vs ${computerChoice}</h2>
        <p>${determineWinner(userChoice, computerChoice)}</p>
        <button onclick="this.parentElement.remove()">Close</button>
    `;
    
    document.body.appendChild(result);

    function determineWinner(user, computer) {
        if(user === computer) return "Draw!";
        if((user === '✊' && computer === '✌️') || 
           (user === '✋' && computer === '✊') || 
           (user === '✌️' && computer === '✋')) return "You Win!";
        return "Computer Wins!";
    }
}

// Initialize other game functions similarly
function initChess() { alert('Chess loading...'); }
function initSnakeLadder() { alert('Snake & Ladder loading...'); }
// Add other game initializers...

// Initialize the game grid when DOM loads
document.addEventListener('DOMContentLoaded', initGameGrid);