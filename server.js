const express = require("express");
const app = express();
const PORT = 3000;

//on homepage user sees: "99 Bottles of Kombucha on the wall"; link "take one down, pass it around"; should link to /98 where the number represents the number of bottles left
app.get("/", (req, res) => {
  //link "take one down, pass it around"
  res.send(`
    <html>
        <body>
            <h1>99 Bottles of Kombucha on the wall</h1>
            <a href="http://localhost:3000/98">Take one down, Pass it around</a>
        </body>
    </html>
`);
});

app.get("/:number_of_bottles", (req, res) => {
  //Link "take one down, pass it around" where the href is number of bottles in the parameter - 1
  if (req.params.number_of_bottles == 0) {
    res.send(
      `<a href="http://localhost:3000/">Ran out of Kombucha, go Home</a>`
    );
  } else {
    res.send(`
      <html>
        <body>
            <h1>${
              req.params.number_of_bottles
            } bottles of Kombucha on the wall</h1>
            <a href="http://localhost:3000/${
              req.params.number_of_bottles - 1
            } ">Take one down, Pass it around</a>
            
        </body>
    </html>
`);
  }
});

//////////////////////////////////////////////////////
//Bonus 99 Little Bugs
/////////////////////////////////////////////////////








app.listen(PORT, (req, res) => {
  console.log(`Express is listening to port ${PORT}`);
});
