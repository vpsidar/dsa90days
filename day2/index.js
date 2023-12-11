//https://leetcode.com/problems/roman-to-integer/description/
const romanToInt = function(s) {
    let value = 0;
    for(let i = 0; i< s.length; i++){
        let valueToBeAdded = 0;
        //check next character
        if((i < s.length -1) && (s[i] == 'I' || s[i] == 'X' || s[i] == 'C')){
            if(s[i] == 'I' && s[i+1] == 'V'){
                valueToBeAdded = 4
                i++;
            } else if(s[i] == 'I' && s[i+1] == 'X'){
                valueToBeAdded = 9
                i++;
            } else if(s[i] == 'X' && s[i+1] == 'L'){
                valueToBeAdded = 40
                i++;
            } else if(s[i] == 'X' && s[i+1] == 'C'){
                valueToBeAdded = 90
                i++;
            } else if(s[i] == 'C' && s[i+1] == 'D'){
                valueToBeAdded = 400
                i++;
            } else if(s[i] == 'C' && s[i+1] == 'M'){
                valueToBeAdded = 900
                i++;
            } else {
                if(s[i] == 'I') {
                    valueToBeAdded = 1;
                }     
                if(s[i] == 'X') {
                    valueToBeAdded= 10;
                }
                if(s[i] == 'C') {
                    valueToBeAdded = 100;
                }
            }
        } else {
            if(s[i] == 'I') {
                valueToBeAdded = 1;
            }     
            if(s[i] == 'X') {
                valueToBeAdded= 10;
            }
            if(s[i] == 'C') {
                valueToBeAdded = 100;
            }
            if(s[i] == 'V') {
                    valueToBeAdded = 5;
                }
            if(s[i] == 'L') {
                    valueToBeAdded= 50;
                }
            if(s[i] == 'D') {
                    valueToBeAdded = 500;
                }
                if(s[i] == 'M') {
                    valueToBeAdded = 1000;
                }
        }
        value = value + valueToBeAdded;
    }
    return value;
};

const romanToIntOptimise = function(s) {
    let value = 0;
    const map = new Map();
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000)
    for(let i= 0; i<s.length;i++){
        if(map.get(s[i]) < map.get(s[i+1])){
            value = value-map.get(s[i]);
        } else {
            value = value + map.get(s[i]);
        }
    }
    return value;
};
console.log(romanToInt('III'));