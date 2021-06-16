function run() {
    var result = "";
    var span = document.getElementById("results");
    span.textContent = "";
    
    var s = document.getElementById("search").value;
    s = s.toLowerCase();
    if (s == "" || s == " ") return;
    
    span.innerHTML += "Searching " + s + "<br>";
    
    
    
    
    // season 1
    for (var i = 1; i <= 18; i++) {
        var file = 'transcripts/1/' + i + '.txt';
//        span.textContent += file;
        
        $.ajax({
            url:file,
            success: function (data) {
                if (data.toLowerCase().includes(s)) {
                    span.innerHTML += ("1." + i + "<br>");
                }
                // prints content of file in lower case
            },
            async: false
        });
    }
    
    
    // season 2

    
    
    var txt = document.createTextNode(result);
    span.appendChild(txt);
    
    
}