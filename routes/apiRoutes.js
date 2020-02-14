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

    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id;
        // console.log(id);
        // finding out that I needed to use req.params to get the id. not body "facepalm"
        for (let i = 0; i < noteData.length; i++) {
            if (id === noteData[i].id) {
                noteData.splice(i, 1);
                // splice out the data that matched the id
            }
        }
        for (let e = 0; e < noteData.length; e++) {
            noteData[e].id = e.toString();
            // bring the data back together after slice
        }
        res.json({ ok: true });
    });
}
