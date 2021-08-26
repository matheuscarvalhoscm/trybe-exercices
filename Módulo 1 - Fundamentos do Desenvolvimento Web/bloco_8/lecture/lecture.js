const wakeUp = () => 'Acordando!'
const breakfast = () => 'Bora tomar café!!'
const sleep = () => 'Patiu dormir!!!'

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);