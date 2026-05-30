export class InputHandler {
    constructor(onDirectionChange) {
        this.onDirectionChange = onDirectionChange;
        this.touchStart = null;
        this.init();
    }

    init() {
        window.addEventListener('keydown', (e) => {
            const key = e.key;
            let dir = null;
            
            if (key === 'ArrowUp') dir = 'up';
            else if (key === 'ArrowDown') dir = 'down';
            else if (key === 'ArrowLeft') dir = 'left';
            else if (key === 'ArrowRight') dir = 'right';
            
            if (dir) {
                this.onDirectionChange(dir);
                e.preventDefault();
            }
        });
        
        const board = document.getElementById('board');
        
        board.addEventListener('mousedown', (e) => {
            this.touchStart = { x: e.clientX, y: e.clientY };
        });
        
        window.addEventListener('mouseup', (e) => {
            if (!this.touchStart) return;
            const dx = e.clientX - this.touchStart.x;
            const dy = e.clientY - this.touchStart.y;
            
            if (Math.abs(dx) < 15 && Math.abs(dy) < 15) {
                this.touchStart = null;
                return;
            }
            
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 0) this.onDirectionChange('right');
                else this.onDirectionChange('left');
            } else {
                if (dy > 0) this.onDirectionChange('down');
                else this.onDirectionChange('up');
            }
            
            this.touchStart = null;
        });
        
        // тач для телефона
        board.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.touchStart = { x: touch.clientX, y: touch.clientY };
        });
        
        window.addEventListener('touchend', (e) => {
            if (!this.touchStart) return;
            const changed = e.changedTouches[0];
            const dx = changed.clientX - this.touchStart.x;
            const dy = changed.clientY - this.touchStart.y;
            
            if (Math.abs(dx) < 15 && Math.abs(dy) < 15) {
                this.touchStart = null;
                return;
            }
            
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 0) this.onDirectionChange('right');
                else this.onDirectionChange('left');
            } else {
                if (dy > 0) this.onDirectionChange('down');
                else this.onDirectionChange('up');
            }
            
            this.touchStart = null;
        });
    }
}
