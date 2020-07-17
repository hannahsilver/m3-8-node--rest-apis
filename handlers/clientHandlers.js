const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

const clientHandler = (req, res) => {
  res.status(200).send({ clients });
};

const clientId = (req, res) => {
  const id = req.params.id;
  let clientObj = {};
  clients.forEach((client) => {
    if (id === client.id) {
      clientObj = client;
      res.status(200).send({ client: clientObj });
    }
  });
};

const addClient = (req, res) => {
  const { age, name, gender, company, email, phone, address } = req.body;
  const newClient = {
    id: uuidv4(),
    isActive: true,
    age,
    name,
    gender,
    company,
    email,
    phone,
    address,
  };
  const foundClient = clients.find((client) => {
    if (client.email === newClient.email) {
      return foundClient;
    }
  });
  if (foundClient !== true) {
    clients.push(newClient);
    res.status(200).send({ newClient, message: "Client added." });
  }
};

const removeClient = (req, res) => {
  const id = req.params.id;
  const clientIndex = clients.findIndex((client) => {
    return client.id === id;
  });
  clients.pop(clientIndex);
  res.status(200).send("Client removed.");
};

module.exports = { clientHandler, clientId, addClient, removeClient };
