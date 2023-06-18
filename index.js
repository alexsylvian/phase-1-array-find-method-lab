function superbowlWin(records){
    const found = records.find(element => element.result === `W`)
    if (found) {
        return found.year
    }
}


/*function superbowlWin(element){
    const found = element.find(element => element.found === `W`)
    return found ? found.year : undefined
}*/

records.find(element => element.result === `W`)