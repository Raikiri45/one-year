let firstName, boyfName, a, link;
function getNames() {
    firstName = document.getElementById("fname").value;
    boyfName = document.getElementById("bname").value;
    firstName = firstName.toLowerCase();
    boyfName = boyfName.toLowerCase();  
   
    if (firstName === 'lana' && boyfName === 'michael') {
        a = document.createElement('a');
        link = document.createTextNode('Click Me!');
        a.appendChild(link);
        a.title ='Click Me!';
        a.href="file:///Users/michael/repos/one-years/one-year/script.js";
        document.body.appendChild(a);
    }
    
}

