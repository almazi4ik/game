export class FoodManager {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.position = { x: 15, y: 15 };
    }

    generate(snakeSegments) {
        const maxAttempts = 2000;
        
        for (let i = 0; i < maxAttempts; i++) {
            const candidate = {
                x: Math.floor(Math.random() * this.boardSize),
                y: Math.floor(Math.random() * this.boardSize)
            };
            
            const isOnSnake = snakeSegments.some(seg => 
                seg.x === candidate.x && seg.y === candidate.y
            );
            
            if (!isOnSnake) {
                this.position = candidate;
                return true;
            }
        }
        
        // Если почти всё поле заполнено — ищем вручную
        for (let x = 0; x < this.boardSize; x++) {
            for (let y = 0; y < this.boardSize; y++) {
                const isOnSnake = snakeSegments.some(seg => seg.x === x && seg.y === y);
                if (!isOnSnake) {
                    this.position = { x, y };
                    return true;
                }
            }
        }
        
        return false; // победа! всё поле заполнено
    }

    getPosition() {
        return this.position;
    }
}
