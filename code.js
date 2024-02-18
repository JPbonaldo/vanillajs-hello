window.onload = () => {
    document.querySelector('#the-excuse').innerHTML = generateExcuse();
};

let generateExcuse = () => {

    let who = ['My fish', 'I', 'My llama','My Uber driver'];
    let action = ['drowned', 'ate', 'threw up','got stuck', 'peed on', 'crushed', 'broke'];
    let what = ['itself', 'cat food instead of tuna', 'my homework', 'the keys', 'the car'];
    let when = ['earlier', 'last night', 'yesterday', 'on the way here', 'before the class', 'right on time', 'when I finished', 'during my lunch',];

    let whoIndex = 0;
    let actionIndex = 0;
    let whatIndex = 0;
    let whenIndex = 0;

    return who[whoIndex] + ' ' + action[actionIndex] + ' ' + when[whenIndex] + ' ' + what[whatIndex];
};