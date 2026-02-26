// for Loop Demo
function forLoopDemo() {
    console.log("FOR LOOP:");
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// while Loop Demo
function whileLoopDemo() {
    console.log("WHILE LOOP:");
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// do...while Demo
function doWhileLoopDemo() {
    console.log("DO WHILE LOOP:");
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

// for...of Demo (Array)
function forOfDemo() {
    console.log("FOR...OF LOOP:");
    const numbers = [10, 20, 30];
    for (let value of numbers) {
        console.log(value);
    }
}

// for...in Demo (Object)
function forInDemo() {
    console.log("FOR...IN LOOP:");
    const student = { name: "Ravi", age: 22 };
    for (let key in student) {
        console.log(key + ": ", student[key]);
    }
}

// Break Demo
function breakDemo() {
    console.log("BREAK DEMO:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        console.log(i);
    }
}

// Continue Demo
function continueDemo() {
    console.log("CONTINUE DEMO:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}

// Nested Loop Pattern Demo
function nestedLoopDemo() {
    console.log("NESTED LOOP PATTERN:");
    for (let i = 1; i <= 3; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}