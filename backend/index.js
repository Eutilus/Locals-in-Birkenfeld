const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const mongodb = require("mongodb");

app.use(cors());

app.use(bodyParser.json());

app.get("/companies", async (req, res) => {
  const companies = await loadCompaniesCollection();
  res.send(await companies.find({}).toArray());
});

app.get("/feedback", async (req, res) => {
  const feedback = await loadFeedbackCollection();
  res.send(await feedback.find({}).toArray());
});

app.post("/companies", async (req, res, next) => {
  const companies = await loadCompaniesCollection();
  await companies.insertOne({
    name: req.body.text,
    email: req.body.email,
    tel: req.body.tel,
    kategorie: req.body.kategorie,
    plz: req.body.plz,
    stadt: req.body.stadt,
    straße: req.body.straße,
    hnummer: req.body.hnummer,
    time_from: req.body.time_from,
    time_to: req.body.time_to,
    montag_von: req.body.montag_von,
    montag_bis: req.body.montag_bis,
    montagM_von: req.body.montagM_von,
    montagM_bis: req.body.montagM_bis,
    dienstag_von: req.body.dienstag_von,
    dienstag_bis: req.body.dienstag_bis,
    dienstagM_von: req.body.dienstagM_von,
    dienstagM_bis: req.body.dienstagM_bis,
    mittwoch_von: req.body.mittwoch_von,
    mittwoch_bis: req.body.mittwoch_bis,
    mittwochM_von: req.body.mittwochM_von,
    mittwochM_bis: req.body.mittwochM_bis,
    donnerstag_von: req.body.donnerstag_von,
    donnerstag_bis: req.body.donnerstag_bis,
    donnerstagM_von: req.body.donnerstagM_von,
    donnerstagM_bis: req.body.donnerstagM_bis,
    freitag_von: req.body.freitag_von,
    freitag_bis: req.body.freitag_bis,
    freitagM_von: req.body.freitagM_von,
    freitagM_bis: req.body.freitagM_bis,
    samstag_von: req.body.samstag_von,
    samstag_bis: req.body.samstag_bis,
    samstagM_von: req.body.samstagM_von,
    samstagM_bis: req.body.samstagM_bis,
    sonntag_von: req.body.sonntag_von,
    sonntag_bis: req.body.sonntag_bis,
    sonntagM_von: req.body.sonntagM_von,
    sonntagM_bis: req.body.sonntagM_bis,
    desc: req.body.desc,
    news: req.body.news,
    status: req.body.status,
    createdAt: new Date()
  });
  res.status(201).send();
});

app.post("/feedback", async (req, res, next) => {
  const feedback = await loadFeedbackCollection();
  await feedback.insertOne({
    text: req.body.text
  });
  res.status(201).send();
});

app.delete("/companies/:id", async (req, res) => {
  const companies = await loadCompaniesCollection();
  await companies.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadCompaniesCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://root:toor@fitnessapp-stssb.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  return client.db("hackathon").collection("companies");
}

async function loadFeedbackCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://root:toor@fitnessapp-stssb.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  return client.db("hackathon").collection("feedback");
}

app.listen(5000, () => console.log("Server Listening at 5000"));
