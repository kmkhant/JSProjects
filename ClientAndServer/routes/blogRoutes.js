const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

// post
router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

// get post by id
router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

// edit blog
router.get("/edit/:id", blogController.blog_edit);

// update blog
router.put("/edit/:id", blogController.blog_update);

router.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 3",
    snippet: "about my new blog",
    body: "lorem ipsum bla bla",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/single-blog", (req, res) => {
  Blog.findById("6251b03963ccf4e3d5f1fb31")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
