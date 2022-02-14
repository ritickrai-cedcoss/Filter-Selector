var arrayTable = [];
var operatingSystem = [];
var brandSystem = [];
var storeItem = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

//display the dropdown
function dropdown() {
  filterData();
  var dropOne =
    '<div id="dropdiv"><select id="osInput" name="" onchange="runOS()"><option value="os">os</option>';
  for (var i = 0; i < operatingSystem.length; i++) {
    dropOne +=
      "<option data-value=" +
      operatingSystem[i] +
      ">" +
      operatingSystem[i] +
      "</option>";
  }
  dropOne +=
    "</select><select id='brandInput' name='' onchange='runBrand()'><option value='brand'>Brand</option>";

  for (var i = 0; i < brandSystem.length; i++) {
    dropOne +=
      "<option data-value=" +
      brandSystem[i] +
      ">" +
      brandSystem[i] +
      "</option>";
  }
  dropOne += "</select><input type='search' id='search' value='Search'></div>";

  return dropOne;
}

function runOS() {
  var selectOS = $("#osInput").val();
  console.log("value of select os : " + selectOS);
  return selectOS;
}

function runBrand(){
  var selectBrand = $("#brandInput").val();
  console.log("value of select brand : " + selectBrand);
  return selectBrand;
}

function filterTable(){
  var selected = [];
  selectOS = runOS();
  selectBrand = runBrand();
  console.log("value of select brand in filterTable: " + selectBrand);
  console.log("value of select os in filterTable : " + selectOS);
  for(var i=0; i<storeItem.length; i++) 
  {
    if(selectOS== "os" && storeItem.os == "os")
    {
      selected=storeItem[i];
      console.log(selected);
    }
    if(selectBrand==storeItem[i].brand)
    {
      selected=storeItem[i];
      console.log(selected);
    }
  }
  display(selected);
}
function filterData() {
  for (var i = 0; i < storeItem.length; i++) {
    if (!operatingSystem.includes(storeItem[i].os)) {
      operatingSystem.push(storeItem[i].os);
    }
    if (!brandSystem.includes(storeItem[i].brand)) {
      brandSystem.push(storeItem[i].brand);
    }
  }
}

//display function
function display(modify) {
  var dropOne = dropdown();
  var tableData =dropOne +
    "<table id='tableId'>\
        <tr>\
            <th>ID</th>\
            <th>Name</th>\
            <th>Brand</th>\
            <th>Operating System</th>\
            <th>Remove</th>\
        </tr>";
  for (var i = 0; i < modify.length; i++) {   
    tableData += 
      "<tr><td>" +
      modify[i].id +
      "</td><td>" +
      modify[i].name +
      "</td><td>" +
      modify[i].brand +
      "</td><td>" +
      modify[i].os +
      '</td><td><a href="#" data-id= ' +
      modify[i].id +
      ">X</a></td></tr>";
  }
  tableData += "</table>";
  $("#main").html(tableData);

  $("#tableId").css({
    border: "1px solid red",
    margin: "15px 0px",
  });
  $("th").css({
    padding: "10px 20px",
    border: "1px solid red",
    "text-align": "center",
  });
  $("td").css({
    padding: "10px 20px",
    border: "1px solid orange",
    "text-align": "center",
  });
  $("select").css({
    padding: "5px 5px",
    "font-size": "0.8rem",
    "margin-right": "15px",
  });
  $("input").css({
    padding: "5px 5px",
    "font-size": "0.8rem",
    "margin-right": "15px",
  });
}
//DOCUMENT READY FUNCTION STARTS FROM HERE
$(document).ready(function () {
  display(storeItem);
  $(document).on("change", "#wrapper", function(){
      filterTable();
  });
  
});
