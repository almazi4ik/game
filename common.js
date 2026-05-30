import { loadSave, saveGame, addCoins, updateHighScore } from './modules/save.js';

// Глобальное состояние
export const gameState = {
    save: loadSave(),
    
    updateCoins(amount) {
        this.save.coins += amount;
        saveGame(this.save);
    },
    
    setSkin(skinId) {
        this.save.currentSkin = skinId;
        if (!this.save.skins.includes(skinId)) {
            this.save.skins.push(skinId);
        }
        saveGame(this.save);
    },
    
    setSound(enabled) {
        this.save.soundEnabled = enabled;
        saveGame(this.save);
    },
    
    setSpeed(speed) {
        this.save.speed = speed;
        saveGame(this.save);
    }
};

// Обновление UI на любой странице
export function updateCommonUI() {
    const scoreSpan = document.getElementById('globalCoins');
    if (scoreSpan) {
        scoreSpan.innerText = gameState.save.coins;
    }
}

// Вызов при загрузке любой страницы
export function initCommon() {
    updateCommonUI();
    
    // добавляем кнопку назад где нужно
    const backBtn = document.getElementById('backToMenu');
    if (backBtn) {
        backBtn.onclick = () => window.location.href = 'index.html';
    }
}
