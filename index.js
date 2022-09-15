const express = require("express");
const cors = require("cors");
const app = express();
const employee = require("./employee.json");
const datas = employee.GRID.ROWS.ROW;

const router = express.Router();
app.use(cors());

router.get("/", (req, res) => {
  return res.status(200).json(employee);
});

// router.get("/main-api/v1", (req, res) => {
//   return res.status(200).json(employee);
// });
// router.get("/main-api/v1/employee", (req, res) => {
//   const user = datas.map((response) => response._attributes);
//   return res.status(200).json(user);
// });
router.get("/main-api/v1/employee", (req, res) => {
  for (let data of datas) return res.status(200).json(data._attributes);
});

router.get("/main-api/v1/employee/:id", (req, res) => {
  const { id } = req.params;
  for (let data of datas) {
    if (data._attributes.dbg_pegawaipegawai_nip == id) {
      return res.status(200).json(data._attributes);
    }
  }
  return res.status(400);
});

app.use(router);
app.listen(5000, () => console.log(`server running in port 5000.....`));
