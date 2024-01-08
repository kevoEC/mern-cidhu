import {ENV} from "../utils"

export class Denuncia{
    baseApi = ENV.BASE_API;

    async getDenuncia(accessToken){
        try{
            const url = `${this.baseApi}/${ENV.API_ROUTES.DENUNCIA_GET}`;
            const params = {
                headers:{
                    Authorization: `Bearer ${accessToken}`
                }
            };
            const response = await fetch(url, params);
            const result = await response.json();

            if(response.status !== 200) throw result;
            return result;
        }catch(error){
            throw error;
        }   
    }

    async createDenuncia(accessToken, data) {
        try {
          console.log(data);
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
          });
    
          const url = `${this.baseApi}/${ENV.API_ROUTES.DENUNCIA}`;
          const params = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
          };
    
          const response = await fetch(url, params);
          const result = await response.json();
    
          if (response.status !== 201) throw result;
    
          return result;
        } catch (error) {
          throw error;
        }
      }

      async getDenuncias(accessToken, active = undefined) {
        try {
          const url = `${this.baseApi}/${ENV.API_ROUTES.DENUNCIAS}?active=${active}`;
          const params = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
    
          const response = await fetch(url, params);
          const result = await response.json();
    
          if (response.status !== 200) throw result;
    
          return result;
        } catch (error) {
          throw error;
        }
      }

      async updateDenuncia(accessToken, idDenuncia, denunciaData) {
        try {
          const data = denunciaData;
          if (!data.password) {
            delete data.password;
          }
    
          const formData = new FormData();
          Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
          });
    
          if (data.fileAvatar) {
            formData.append("avatar", data.fileAvatar);
          }
    
          const url = `${ENV.BASE_API}/${ENV.API_ROUTES.DENUNCIA}/${idDenuncia}`;
          const params = {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
          };
    
          const response = await fetch(url, params);
          const result = await response.json();
    
          if (response.status !== 200) throw result;
    
          return result;
        } catch (error) {
          throw error;
        }
      }

      async deleteDenuncia(accessToken, idDenuncia) {
        try {
          const url = `${this.baseApi}/${ENV.API_ROUTES.DENUNCIA}/${idDenuncia}`;
          const params = {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
    
          const response = await fetch(url, params);
          const result = await response.json();
    
          if (response.status !== 200) throw result;
    
          return result;
        } catch (error) {
          throw error;
        }
      }


}