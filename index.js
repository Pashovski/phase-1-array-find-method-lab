function superbowlWin(record){
    const found = record.find(win => win.result === "W")
    if(found != undefined){return found.year}
else{return undefined}
    
}

// if(found != undefined){return found.year}
// else{returned undefined}
