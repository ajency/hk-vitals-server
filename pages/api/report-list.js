import dotenv from "dotenv";

dotenv.config();
  
const AIRTABLEAPI = process.env.airtableapikey; // import airtable api key
const AIRTABLEBASEID = process.env.airtablebaseid; // import airtable base  id
const AIRTABLETABLENAME = "lab-report"; // table name

export default function handler(req, res) {
// to read a record , we need to send a "GET" request with our base id table name and our API key to get the existing data on our table.
fetch(
    `https://api.airtable.com/v0/${AIRTABLEBASEID}/${AIRTABLETABLENAME}?maxRecords=&view=Grid%20view`,
    {
      headers: { Authorization: `Bearer ${AIRTABLEAPI}` },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      //send results to the client
      res.status(200).send(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send([]);
    });
}