var express= require('express'),
    router = express.Router(),
    db     = require('../models/index')
    helpers= require('../helper/index');

//=================================
// endpoint: /api/todo/
//=============================

router.route("/",)
.get(helpers.getTodos)
.post(helpers.postTodos)


router.route("/:todoID",)
.get(helpers.showTodos)
.put(helpers.updateTodos)
.delete(helpers.deleteTodos)

module.exports =router;