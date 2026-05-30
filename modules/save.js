export const SAVE_KEY = 'snake_save';

export function loadSave() {
    const defaultSave = {
        coins: 0,
        skins: ['default'],
        currentSkin: 'default',
        highScore: 0,
        soundEnabled: true,
        speed: 'normal'
    };
    
    const saved = localStorage.getItem(SAVE_KEY);
    if (!saved) return defaultSave;
    
    try {
        return { ...defaultSave, ...JSON.parse(saved) };
    } catch {
        return defaultSave;
    }
}

export function saveGame(data) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

export function addCoins(amount) {
    const save = loadSave();
    save.coins += amount;
    saveGame(save);
    return save.coins;
}

export function updateHighScore(score) {
    const save = loadSave();
    if (score > save.highScore) {
        save.highScore = score;
        saveGame(save);
        return true;
    }
    return false;
}
