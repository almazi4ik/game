* {
    user-select: none;
    touch-action: none;
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(145deg, #1a472a, #0e2a1a);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', monospace;
}

.container {
    background: #2b5e3b;
    border-radius: 48px;
    padding: 20px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.menu {
    text-align: center;
    min-width: 280px;
}

h1 {
    color: #f9e7c2;
    text-shadow: 3px 3px 0 #3b2a1f;
    font-size: 2.5rem;
    margin: 0 0 30px 0;
}

button {
    background: #e6b45e;
    border: none;
    font-family: monospace;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 12px 24px;
    margin: 10px;
    border-radius: 60px;
    cursor: pointer;
    box-shadow: 0 5px 0 #8b5a2b;
    transform: translateY(-2px);
    transition: 0.05s linear;
    width: 200px;
}

button:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #8b5a2b;
}

.hud {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: #f9e7c2;
    font-weight: bold;
    font-size: 1.2rem;
}

.score-box {
    background: #2d2218;
    padding: 6px 18px;
    border-radius: 40px;
    box-shadow: inset 0 1px 3px #5f4a32, 0 3px 6px black;
}

#board {
    position: relative;
    width: min(85vw, 85vh, 550px);
    height: min(85vw, 85vh, 550px);
    background: #1f3d2c;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: inset 0 0 0 3px #5a9e6e, 0 0 0 5px #3c2b1f;
}

.cell {
    position: absolute;
    transition: all 0.05s linear;
}

.snake-head {
    background: radial-gradient(circle at 40% 40%, #b0ff90, #3ca55c);
    border-radius: 45% 55% 50% 50%;
    box-shadow: 0 0 0 1px #d4ffb0;
    z-index: 10;
}

.snake-body {
    background: radial-gradient(circle at 35% 35%, #7ef095, #2e8e47);
    border-radius: 40% 60% 45% 55%;
    box-shadow: 0 0 0 1px #c8ffa0;
}

.food {
    background: radial-gradient(circle at 40% 40%, #ffb347, #ff6b2b);
    border-radius: 50%;
    animation: pulse 0.3s infinite alternate;
    box-shadow: 0 0 10px #ffaa44;
}

@keyframes pulse {
    from { transform: scale(0.9); opacity: 0.8; }
    to { transform: scale(1.1); opacity: 1; }
}

.back-btn {
    background: #6b5a4a;
    box-shadow: 0 5px 0 #4a3a2a;
    width: auto;
    padding: 8px 20px;
    font-size: 1rem;
    margin-top: 15px;
}

.shop-item {
    background: #2d2218;
    margin: 15px;
    padding: 12px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f9e7c2;
    gap: 15px;
    flex-wrap: wrap;
}

.setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    color: #f9e7c2;
    font-size: 1.2rem;
    gap: 20px;
}

select, input {
    background: #1f3d2c;
    border: 2px solid #e6b45e;
    padding: 8px 12px;
    border-radius: 30px;
    color: #f9e7c2;
    font-size: 1rem;
    font-family: monospace;
      }
