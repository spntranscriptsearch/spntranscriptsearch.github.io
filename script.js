function clean() {
    document.getElementById("results").innerHTML = "";
}

function run(j) {
    var result = "", span = document.getElementById("results"), s = document.getElementById("search").value, eps = [22, 22, 16, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 20, 20];
    
    s = s.toLowerCase();
    if (s === "" || s === " ") {
        return;
    }
    
    span.innerHTML += "Searching " + s + "<br>";
    
    for (var i = 1; i <= eps[j - 1]; i++) {
        var file = 'transcripts/' + j + '/' + i + '.txt';

        $.ajax({
            url:file,
            success: function (data) {
                if (data.toLowerCase().includes(s)) {
                    if (i < 10) {
                        span.innerHTML += (j + ".0" + i + "<br>");
                    } else {
                        span.innerHTML += (j + "." + i + "<br>");
                    }
                    
                }
            },
            async: false
        });
    }
}

function runall() {
    var result = "", span = document.getElementById("results"), s = document.getElementById("search").value, eps = [22, 22, 16, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 20, 20];
    
    s = s.toLowerCase();
    if (s === "" || s === " ") {
        return;
    }
    
    span.innerHTML += "Searching " + s + "<br>";
    
    for (var j = 1; j <= 15; j++) {
        for (var i = 1; i <= eps[j - 1]; i++) {
            var file = 'transcripts/' + j + '/' + i + '.txt';

            $.ajax({
                url:file,
                success: function (data) {
                    if (data.toLowerCase().includes(s)) {
                        if (i < 10) {
                            span.innerHTML += (j + ".0" + i + "<br>");
                        } else {
                            span.innerHTML += (j + "." + i + "<br>");
                        }

                    }
                },
                async: false
            });
        }
    }
}