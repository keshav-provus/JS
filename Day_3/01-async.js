async function getFakeData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(await response.json());
}

getFakeData();

