var services = new Services();

function getEle (id){
   return document.getElementById(id);
};

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

    data.forEach(function (GV, index){
        contentHTML += `
        <tr>
            <td>${index +1}</td>
            <td>${GV.taiKhoan}</td>
            <td>${GV.matKhau}</td>
            <td>${GV.hoTen}
            <img class="img-fluid" src="./../../assets/img/${
              GV.hinhAnh
            }"  width="50"/>
            </td>
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
};

function deleteGV(id){
  services.deleteGVInfomationAPI(id).then(function(){
    getListGVInfomationAPI();
  })
  .catch(function(error){
    console.log(error);
  });
};

getEle("btnThemNguoiDung").onclick = function(){
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm TK";

  var footer = `<button class="btn btn-danger" onclick="addGV()">Add</button>`

  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
};

function addGV (){
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var hinhAnh = getEle("HinhAnh").value;
  var loaiND = getEle("loaiNguoiDung").value;
  var ngonNgu = getEle("loaiNgonNgu").value;
  var moTa = getEle("MoTa").value;

  var GV = new GV ("", taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);

  services.addGVInfomationAPI(GV).then(function(){
    getListGVInfomationAPI();
    document.getElementsByClassName("close")[0].click();
  })
  .catch(function(error){
    console.log(error);
  })
}

