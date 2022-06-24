var services = new Services();

function getEle (id){
    return document.getElementById(id)
}

function getListGVInfomationAPI (){
    services.getListGVInfomationAPI().then(function(result){
        renderListGVInformationAPI (result.data)
    })
    .catch(function(error){
        console.log(error);
    })
}

getListGVInfomationAPI();

function renderListGVInformationAPI(data){
    var contentHTML = "";

    data.forEach(function(GV){
        contentHTML +=`
        <div class="col-12 col-lg-3 col-md-6">
        <div class="card cardTeacher">
          <img class="card-img-top" src="./img/${GV.hinhAnh}" alt="Card image">
          <div class="card-body">
              <p class="card-title"><b>${GV.ngonNgu}</b></p>
              <h3 class="card-text">${GV.hoTen}</h3>
              <span>${GV.moTa}</span>
          </div>
        </div>
      </div>
        `;
    });

    getEle("teacher").innerHTML = contentHTML;
}