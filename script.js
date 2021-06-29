function computerPlay() {
    const ITEMS = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * 3);
    return ITEMS[rand];
}