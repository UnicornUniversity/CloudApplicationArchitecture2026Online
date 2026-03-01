const http = require("http");

const server = http.createServer((req, res) => {
        console.log(req.url);
        console.log(req.method);

        if (req.method === "GET" && req.url === "/health"){
            res.write("<html>");
            res.write("<b>I am OK!</b>");
            res.write("</html>");
        }
        // POST process form

        return res.end();
    }
);

server.listen(3000);