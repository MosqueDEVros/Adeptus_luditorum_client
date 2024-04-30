import axios from "axios";

class CollaboratorService {

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/collaborator`,
    });

  }




}

const collaboratorService = new CollaboratorService();

export default collaboratorService;
