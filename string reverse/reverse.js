


/* 1 method

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}



// 2nd Method 

const reverse = (str) => {
    let reversed = '';
    for(let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}
*/


// 3rd method

const reverse = (str) => {
    return str.split('').reduce((reversed, char) => {
       return  char + reversed;
    }, '');
};

console.log(reverse("Abhishek"));