export class Snake {
    constructor(startX, startY) {
        this.segments = [
            { x: startX, y: startY },
            { x: startX, y: startY + 1 },
            { x: startX, y: startY + 2 }
        ];
        this.direction = 'up';
        this.nextDirection = 'up';
    }

    getHead() {
        return this.segments[0];
    }

    setDirection(newDir) {
        const opposites = {
            'up': 'down', 'down': 'up',
            'left': 'right', 'right': 'left'
        };
        
        if (opposites[newDir] !== this.direction) {
            this.nextDirection = newDir;
            return true;
        }
        return false;
    }

    applyDirection() {
        this.direction = this.nextDirection;
    }

    calculateNextHead() {
        const head = this.getHead();
        switch (this.direction) {
            case 'up': return { x: head.x, y: head.y - 1 };
            case 'down': return { x: head.x, y: head.y + 1 };
            case 'left': return { x: head.x - 1, y: head.y };
            case 'right': return { x: head.x + 1, y: head.y };
        }
    }

    move(newHead, ateFood) {
        this.segments.unshift(newHead);
        if (!ateFood) this.segments.pop();
    }

    collidesWith(pos) {
        return this.segments.some(seg => seg.x === pos.x && seg.y === pos.y);
    }

    collidesWithItself() {
        const head = this.getHead();
        return this.segments.slice(1).some(seg => seg.x === head.x && seg.y === head.y);
    }

    getLength() {
        return this.segments.length;
    }
}
