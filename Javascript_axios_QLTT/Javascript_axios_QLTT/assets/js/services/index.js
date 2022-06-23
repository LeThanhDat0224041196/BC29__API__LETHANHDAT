function Services(){
    this.getListGVInfomationAPI = function (){
        return axios({
            url: "https://628b995b667aea3a3e32d121.mockapi.io/api/GV",
            method: "GET",
        });
    };
}