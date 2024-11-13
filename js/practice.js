function todo(task){
    console.log("Strart of todo");
    setTimeout(function fun(){
        console.log("completed",task);
    },5000);
    console.log("End of todo");
}
console.log("Starting");
todo("assingnment");
console.log("Ending");