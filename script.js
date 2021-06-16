function run() {
    var result = "";
    var span = document.getElementById("results");
    span.textContent = "";
    
    var s = document.getElementById("search").value;
    s = s.toLowerCase();
    if (s == "" || s == " ") return;
    
    span.innerHTML += "Searching " + s + "<br>";
    
    var eps = [22, 22, 16, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 20, 20];
    
    for (var j = 1; j <= 15; j++) {
        for (var i = 1; i <= eps[j - 1]; i++) {
            var file = 'transcripts/' + j + '/' + i + '.txt';

            $.ajax({
                url:file,
                success: function (data) {
                    if (data.toLowerCase().includes(s)) {
                        span.innerHTML += (j + "." + i + "<br>");
                    }
                },
                async: false
            });
        }
    }
}