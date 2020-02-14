var noteData = require("../db/db.json");
path = require("path")

console.log(noteData);
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);
    });

    // app.delete("/api/notes/:id", function (req, res) {
    //     noteData.splice(req.body.map({ id }));


    // });
    app.delete('/api/notes/:id', function (req, res) {
        var id = req.params.id;
        Book.removeBook(id, function (err, book) {
            if (err) {
                throw err;
            }
            res.json(book);
        });
    });
}
