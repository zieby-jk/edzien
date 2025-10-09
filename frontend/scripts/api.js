const API = {
    get accessToken() {
        return localStorage.getItem("token")
    },
    set accessToken(value) {
        localStorage.setItem("token", value)
    },
    AuthGet: async (url) => {
        if (API.accessToken === null) {
            throw new Error("Access token is null")
        }
        return await fetch(url, {
            headers: {
                "Content-Type": "aplication/json",
                Authorization: API.accessToken
            }
        })
    }


}