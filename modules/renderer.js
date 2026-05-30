export class Renderer {
    constructor(boardElement, boardSize, cellSize) {
        this.board = boardElement;
        this.boardSize = boardSize;
        this.cellSize = cellSize;
        this.snakeElements = new Map();
        this.foodElement = null;
    }

    clear() {
        this.board.innerHTML = '';
        this.snakeElements.clear();
        this.foodElement = null;
    }

    renderSnake(snakeSegments, currentSkin = 'default') {
        snakeSegments.forEach((seg, idx) => {
            const key = `${seg.x},${seg.y}`;
            let div = this.snakeElements.get(key);
            
            if (!div) {
                div = document.createElement('div');
                div.className = `cell ${idx === 0 ? 'snake-head' : 'snake-body'}`;
                this.board.appendChild(div);
                this.snakeElements.set(key, div);
            }
            
            div.style.width = `${this.cellSize}px`;
            div.style.height = `${this.cellSize}px`;
            div.style.left = `${seg.x * this.cellSize}px`;
            div.style.top = `${seg.y * this.cellSize}px`;
            
            // применение скина (можно расширить)
            if (currentSkin !== 'default' && idx === 0) {
                div.style.background = `radial-gradient(circle at 40% 40%, #ffcc88, #e6a017)`;
            }
        });
        
        // удаляем старые элементы
        for (let [key, el] of this.snakeElements) {
            if (!snakeSegments.some(seg => `${seg.x},${seg.y}` === key)) {
                el.remove();
                this.snakeElements.delete(key);
            }
        }
    }

    renderFood(position) {
        if (this.foodElement) {
            this.foodElement.remove();
        }
        
        const div = document.createElement('div');
        div.className = 'cell food';
        div.style.width = `${this.cellSize}px`;
        div.style.height = `${this.cellSize}px`;
        div.style.left = `${position.x * this.cellSize}px`;
        div.style.top = `${position.y * this.cellSize}px`;
        this.board.appendChild(div);
        this.foodElement = div;
    }

    renderGameOver(message = '💀 ИГРА ОКОНЧЕНА 💀') {
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.inset = '0';
        overlay.style.background = '#000000aa';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.fontSize = 'min(6vw, 28px)';
        overlay.style.fontWeight = 'bold';
        overlay.style.color = 'white';
        overlay.style.backdropFilter = 'blur(4px)';
        overlay.style.textAlign = 'center';
        overlay.style.flexDirection = 'column';
        overlay.style.gap = '15px';
        overlay.style.zIndex = '100';
        overlay.innerHTML = `${message}<button id="restartBtn" style="font-size: 1rem; width: auto;">🔄 Новая игра</button>`;
        
        this.board.style.position = 'relative';
        this.board.appendChild(overlay);
        
        document.getElementById('restartBtn')?.addEventListener('click', () => {
            window.location.reload();
        });
    }
}
