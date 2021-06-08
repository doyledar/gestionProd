import http from "../http-common";

class TypeAnimaleDataService {
  getAll() {
    return http.get("/typesAnimales");
  }

  get(id) {
    return http.get(`/typesAnimales/${id}`);
  }

  create(data) {
    return http.post("/typesAnimales", data);
  }

  update(id, data) {
    return http.put(`/typesAnimales/${id}`, data);
  }

  delete(id) {
    return http.delete(`/typesAnimales/${id}`);
  }

  deleteAll() {
    return http.delete(`/typesAnimales`);
  }

  }

export default new TypeAnimaleDataService();