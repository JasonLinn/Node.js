
var Http = require('http'),
    Router = require('router'),
    server,
    router;
var BodyParser = require('body-parser');    
router = new Router();

server = Http.createServer(function (request, response) {
    router(request, response, function (error) {
        if (!error) {
            response.writeHead(404);
        } else {
            // Handle errors
            console.log(error.message, error.stack);
            response.writeHead(400);
        }
        response.end('RESTful API Server is running!');
    });
});
var counter = 0,
    todoList = {};

function createItem(request, response) {
    var id = counter += 1,
        item = request.body;

    console.log('Create item', id, item);
    todoList[id] = item;
    response.writeHead(201, {
        'Content-Type': 'text/plain',
        'Location': '/todo/' + id
    });
    response.end(item);
}
router.post('/todo', createItem);    


server.listen(3000, function () {
    console.log('Listening on port 3000');
});


router.use(BodyParser.text());