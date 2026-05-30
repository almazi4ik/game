export function getCellSize(boardSize) {
    const boardElement = document.getElementById('board');
    if (!boardElement) return 22;
    const size = boardElement.clientWidth;
    return size / boardSize;
}

export function showMessage(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) el.innerText = text;
}

export function formatTime(seconds) {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
}
