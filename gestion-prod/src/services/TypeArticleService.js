import http from "../http-common";

class TypeArticleDataService {
  getAll() {
    return http.get("/typesArticles");
  }

  /* get(id) {
    return http.get(`/typesArticles/${id}`);
  }

  create(data) {
    return http.post("/typesArticles", data);
  }

  update(id, data) {
    return http.put(`/typesArticles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/typesArticles/${id}`);
  }

  deleteAll() {
    return http.delete(`/typesArticles`);
  }
 */
  }

export default new TypeArticleDataService();