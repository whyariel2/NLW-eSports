import express from "express";

const app = express();

//HTTP methods | API RESTful | HTTP Codes

app.get('/games', (request, response) =>{
    return response.json([]);

});

app.post('/ads', (request, response) =>{
    return response.status(201).json([]);

});

app.get("/games/:id/ads", (request, response) => {
  // const adId = request.params.id;

  return response.json([
    { id: 1, name: "Ad 1" },
    { id: 2, name: "Ad 2" },
    { id: 3, name: "Ad 3" },
    { id: 4, name: "Ad 4" },
  ]);
});

app.get("/games/:id/discord", (request, response) => {
  // const gameId = request.params.id;

  return response.json([]);
});

app.listen(3333);
