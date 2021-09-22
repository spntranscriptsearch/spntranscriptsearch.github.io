function toggle(id) {
    var n = document.getElementById(id);
    n.style.display = (n.style.display != 'none' ? 'none' : '');
}

function clean() {
    document.getElementById("results").innerHTML = "";
}

function run(j) {
    var result = "", span = document.getElementById("results"), s = document.getElementById("search").value, eps = [22, 22, 16, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 20, 20];
    
    s = s.toLowerCase();
    if (s === "" || s === " ") {
        return;
    }
    
    span.innerHTML += "<span style=\"color:#84acba\">Season " + j + " results for </span>\"" + s + "\"<br>";
    
    for (var i = 1; i <= eps[j - 1]; i++) {
        var file = 'transcripts/' + j + '/' + i + '.txt';

        $.ajax({
            url:file,
            success: function (data) {
                if (data.toLowerCase().includes(s)) {
                    if (i < 10) {
                        span.innerHTML += (j + ".0" + i + " ");
                    } else {
                        span.innerHTML += (j + "." + i + " ");
                    }
                    
                }
            },
            async: false
        });
    }
    span.innerHTML += "<br/><br/>";
}

function runall() {
    var result = "", span = document.getElementById("results"), s = document.getElementById("search").value, eps = [22, 22, 16, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 20, 20];
    
    s = s.toLowerCase();
    if (s === "" || s === " ") {
        return;
    }
    
    span.innerHTML += "<span style=\"color:#84acba\">Results for </span>\"" + s + "\"<br>";
    
    for (var j = 1; j <= 15; j++) {
        var found = false;
        for (var i = 1; i <= eps[j - 1]; i++) {
            var file = 'transcripts/' + j + '/' + i + '.txt';

            $.ajax({
                url:file,
                success: function (data) {
                        if (data.toLowerCase().includes(s)) {
                            if (i < 10) {
                                span.innerHTML += (j + ".0" + i + " ");
                                found = true;
                            } else {
                                span.innerHTML += (j + "." + i + " ");
                                found = true;
                        }
                    }
                },
                async: false
            });
        }
        if (found) span.innerHTML += "<br/>";
    }
    span.innerHTML += "<br/>";
}