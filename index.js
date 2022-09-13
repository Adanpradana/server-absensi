const express = require("express");
const cors = require("cors");
const app = express();
const employee = require("./employee.json");
const datas = employee.GRID.ROWS.ROW;
const router = express.Router();
app.use(cors());

router.get("/", (req, res) => {
  return res.json(datas);
});

router.get("/employee/details", (req, res) => {
  const user = datas.map((response) => response._attributes);
  return res.status(200).json(user);
});

router.get("/employee/details/:id", (req, res) => {
  const id = req.params.id;
  const user = datas.filter((data) => data._attributes.dbg_pegawaipegawai_nip == id);
  return res.status(200).json(user);
});

app.use(router);
app.listen(5000, () => console.log(`server running in port 5000.....`));
