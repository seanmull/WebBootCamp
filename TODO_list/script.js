const todoList = [];
let input;

while(true){
    input = prompt("Enter a command:");
    if(input === "quit"){
        console.log("You quit the game");
        break;
    }else if(input === "new"){
        let addedItem = prompt("Enter a item to add to list:");
        todoList.push(addedItem);
        console.log(`Added ${addedItem} to the list`);
    }else if(input === "list"){
        for(let i = 0; i < todoList.length; i++){
            let index = i + 1;
            console.log(`${index} : ${todoList[i]}`);
        }
    }else if(input === "delete"){
        let removedItem = prompt("Enter a item to remove from the list:");
        todoList.splice(removedItem-1, 1);
        console.log(`Removed ${removedItem} from the list`);
    }
}
