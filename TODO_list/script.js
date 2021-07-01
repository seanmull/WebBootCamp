let todoList = [];

let input = "";

while(true){
    let input = prompt("Enter a command:");
    if(input == "quit"){
        break;
    }
    if(input == "new"){
        let addedItem = prompt("Enter a item to add to list:");
        todoList.push(addedItem);
        console.log(`Added ${addedItem} to the list`);
    }
    if(input == "list"){
        for(let i = 0; i < todoList.length; i++){
            console.log(i+1," : ",todoList[i]);
        }
    }
    if(input == "delete"){
        let removedItem = prompt("Enter a item to remove from the list:");
        todoList.splice(removedItem+1, 1);
        console.log(`Removed ${removedItem} from the list`);
    }
}
