import http from "../http-common";

class TypeDLCDataService {
  getAll() {
    return http.get("/typesDLC");
  }

  get(id) {
    return http.get(`/typesDLC/${id}`);
  }

  create(data) {
    return http.post("/typesDLC", data);
  }

  update(id, data) {
    return http.put(`/typesDLC/${id}`, data);
  }

  delete(id) {
    return http.delete(`/typesDLC/${id}`);
  }

  deleteAll() {
    return http.delete(`/typesDLC`);
  }

  }

export default new TypeDLCDataService();