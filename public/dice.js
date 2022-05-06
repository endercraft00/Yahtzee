const Dice = function(index){
    let value = 0;
    let yPos = 0;
    let selected = false;



    const getVal = function(){
        return value;
    };

    const changeVal = function(x){
        value = x;
    };

    const rollDice = function(){
        if(selected = false){
            let roll = Math.floor(Math.random()*6)+1;
            value = roll;
        }
        else return;
    };

    const setY = function(yMax){
        let newY = Math.floor(Math.random()*yMax)+1;
        yPos = newY;
    };

    const getIndex = function(){
        return index;
    };

    const clickDice = function(){
        if (selected==false)selected = true;
        else selected = false;
    };


}

