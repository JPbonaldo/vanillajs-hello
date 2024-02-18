window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#the-excuse').innerHTML = generateExcuse();
});
};

let generateExcuse = () => {

    let who = ['My fish', 'I', 'My llama','My Uber driver'];
    let action = ['drowned', 'ate', 'threw up','got stuck', 'peed on', 'crushed', 'broke'];
    let what = ['itself', 'cat food instead of tuna', 'my homework', 'the keys', 'the car'];
    let when = ['earlier', 'last night', 'yesterday', 'on the way here', 'before the class', 'right on time', 'when I finished', 'during my lunch'];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex] + ' ' + action[actionIndex] + ' ' + when[whenIndex] + ' ' + what[whatIndex];
};