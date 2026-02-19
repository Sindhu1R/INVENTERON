function fakeApiCall(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve("Data Received");
        },3000);
    });
}

// WITHOUT ASYNC
function withoutAsync(){

    console.clear();

    console.log("1 Start");

    const response = fakeApiCall();

    console.log("2 Fetch Done (no await)");

    response.then(data=>{
        console.log("3 Data:",data);
    });

    console.log("4 End");
}


// WITH ASYNC
async function withAsync(){

    console.clear();

    document.getElementById("loader").style.display="block";

    console.log("1 Start");

    const response = await fakeApiCall();

    console.log("2 Fetch Done (await)");
    console.log("3 Data:",response);

    console.log("4 End");

    document.getElementById("loader").style.display="none";
}

