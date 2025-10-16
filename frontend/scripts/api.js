const API = {
     get accessToken() {
          return localStorage.getItem("token");
     },
     set accessToken(value) {
          localStorage.setItem("token", value);
     },
     AuthGet: async (url) => {
          if (API.accessToken === null) {
               throw new Error("Access token is null");
          }
          return await fetch(url, {
               headers: {
                    "Content-Type": "aplication/json",
                    Authorization: API.accessToken
               }
          });
     },
     AuthPost: async (url, data) => {
          if (API.accessToken === null) {
               throw new Error("Access token is null");
          }
          return await fetch(url, {
               headers: {
                    "Content-Type": "aplication/json",
                    Authorization: API.accessToken
               },
               method: "POST",
               body: JSON.stringify(data)
          });
     },
     AuthDelete: async (url) => {
          if (API.accessToken === null) {
               throw new Error("Access token is null");
          }
          return await fetch(url, {
               headers: {
                    "Content-Type": "aplication/json",
                    Authorization: API.accessToken
               },
               method: "DELETE"
          });
     },
     schools: {
          _cache: [],
          refresh: async () => {
               this._cache = await fetch("/api/school/lists").then(r => r.json());
          },
          get list() { return this._cache; }
     }
};
window.onload = API.schools.refresh