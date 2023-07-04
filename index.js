import { createServer, Model, ActiveModelSerializer } from "miragejs";
import db from "./db.json";

const singularize = (word) => (word.endsWith("s") ? word.slice(0, -1) : word);

function makeModels(db) {
  const models = {};
  for (const resource in db) {
    const model = singularize(resource);
    models[model] = Model;
  }
  return models;
}

function runServer() {
  createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: makeModels(db),

    seeds(server) {
      for (const resource in db) {
        const model = singularize(resource);
        for (const item of db[resource]) {
          server.create(model, item);
        }
      }
    },

    routes() {
      this.logging = false;

      for (const resource in db) {
        this.get(`/${resource}`);
        this.post(`/${resource}`);
        this.patch(`/${resource}/:id`);
        this.del(`/${resource}/:id`);
      }
    },
  });
}

export default runServer;
