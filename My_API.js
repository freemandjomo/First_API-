const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set Header to return JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Routing Logic (Raw Node.js without Frameworks)
    if (req.url === '/goal') {
        const goal = {
            target: "Switzerland",
            role: "Senior Backend Engineer",
            year: 2029,
            salary_expectation: "130k CHF"
        };
        res.end(JSON.stringify(goal));
    } else if (req.url === '/status') {
        const status = {
            system: "Node.js Server",
            uptime: process.uptime(),
            mood: "Focused"
        };
        res.end(JSON.stringify(status));
    } else {
        // Handle 404
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Route not found", hint: "Try /goal or /status" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});