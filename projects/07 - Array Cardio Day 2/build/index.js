"use strict";
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];
const taskOne = (people) => people.some((p) => new Date().getFullYear() - p.year >= 19);
const taskTwo = (people) => people.every((p) => new Date().getFullYear() - p.year >= 19);
const taskThree = (comments) => comments.find((c) => c.id === 823423);
const taskFour = (comments) => {
    const index = comments.findIndex((c) => c.id === 823423);
    return comments.toSpliced(index, 1);
};
