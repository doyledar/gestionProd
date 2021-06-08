import http from "../http-common";

class TypeRemplacementDataService {
  getAll() {
    return http.get("/typesRemplacements");
  }

  get(id) {
    return http.get(`/typesRemplacements/${id}`);
  }

  create(data) {
    return http.post("/typesRemplacements", data);
  }

  update(id, data) {
    return http.put(`/typesRemplacements/${id}`, data);
  }

  delete(id) {
    return http.delete(`/typesRemplacements/${id}`);
  }

  deleteAll() {
    return http.delete(`/typesRemplacements`);
  }

  }

export default new TypeRemplacementDataService();