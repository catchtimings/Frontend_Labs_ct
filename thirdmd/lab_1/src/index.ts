function load_data() : void
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'data.json', false);
    xhr.send();
    if(xhr.status != 200)
    {
        alert(`Error loading data from ${xhr.status}: ${xhr.statusText}`);
    }
    else
    {
        alert("Open console");
        console.log(xhr.responseText);
    }
}

load_data();