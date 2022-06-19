var services = new Services();

function getEle (id){
   return document.getElementById(id);
};

function getListGVInfomationApi (){
    services.getListGVInfomationApi().then(function(result){
        renderListGVInformationApi (result.data)
    })
    .catch(function(error){
        console.log(error);
    })
}

getListGVInfomationApi();

function renderListGVInformationApi(data){
    var contentHTML = "";

    data.forEach(function (GV, index){
        contentHTML += `
        <tr>
            <td>${index +1}</td>
            <td>${GV.taiKhoan}</td>
            <td>${GV.matKhau}</td>
            <td>${GV.hoTen}</td>
            <td>${GV.email}</td>
            <td>${GV.ngonNgu}</td>
            <td>${GV.loaiND}</td>
            <td>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editGV(${
                GV.id
              })">Sửa</button>
              <button class="btn btn-danger" onclick="deleteGV(${
                GV.id
              })">Xoá</button>
            </td>
        </tr>
        
        `;
    });

  getEle("tblDanhSachNguoiDung").innerHTML= contentHTML;
}