function Services(){
    this.getListGVInfomationAPI = function (){
        return axios({
            url: "https://628b995b667aea3a3e32d121.mockapi.io/api/GV",
            method: "GET",
        });
    };

    this.deleteGVInfomationAPI = function(id){
        return axios({
            url: `https://628b995b667aea3a3e32d121.mockapi.io/api/GV/${id}`,
            method: "DELETE",
        });
    };

    this.addGVInfomationAPI = function(GV){
        return axios({
            url: "https://628b995b667aea3a3e32d121.mockapi.io/api/GV",
            method: "POST",
            data: GV,
        });
    };

    this.getGVbyID = function(id){
        return axios({
            url: `https://628b995b667aea3a3e32d121.mockapi.io/api/GV/${id}`,
            method:"GET",
        });
    };

    this.updateGVInfomationAPI = function(GV){
        return axios({
            url: `https://628b995b667aea3a3e32d121.mockapi.io/api/GV/${GV}`,
            method: "PUT",
        })
    }
};