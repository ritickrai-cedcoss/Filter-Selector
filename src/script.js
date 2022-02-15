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
var uniqueBrands = [];
var uniqueOs = [];

function brandValue() {
	var brand = $("#brandNames option:selected").text();
	return brand;
}
function osValue() {
	var Os = $("#brandOs option:selected").text();
	return Os;
}



function search(){
	var selected=[]
	$("#selectbox").on("click","#search", function () {
		var value = $("#myInput").val();
		
		/* console.log(value)
		console.log(storeItem.find(x => x.id === value),storeItem.find(x => x.name === value)); */
		for(var i=0;i<storeItem.length;i++){
		
			if(value==storeItem[i].id){
				selected.push(storeItem[i])
			
				
			}
			if(value==storeItem[i].name){
				selected.push(storeItem[i])
				
			}
			if(storeItem[i].name.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
				selected.push(storeItem[i])
				console.log(storeItem[i].name)
			}

			display(selected)
		}
		selected=[]
	});
	
}
function dropdown() {
		var selected = [];
		var brandvalue = brandValue();
		var Osvalue = osValue();
		console.log(brandvalue, Osvalue)
		
		for (var i = 0; i < storeItem.length; i++) {
			if (brandvalue == "Brand" && Osvalue == "Os") {
				console.log(brandvalue, Osvalue);
				selected=storeItem
			}
			if (Osvalue == storeItem[i].os && brandvalue == "Brand") {
				console.log(storeItem[i], Osvalue);
				selected.push(storeItem[i])
			}
			if (brandvalue == storeItem[i].brand && Osvalue == "Os") {
				console.log(storeItem[i]);
				selected.push(storeItem[i])
			}
			if (brandvalue == storeItem[i].brand && Osvalue == storeItem[i].os) {
				console.log(storeItem[i]);
				selected.push(storeItem[i])
			}
		
		}
		console.log(selected,"selected")
		display(selected)
}
function uniqueValues(){
	for (var i = 0; i < storeItem.length; i++) {
		if (!uniqueBrands.includes(storeItem[i].brand)) {
			uniqueBrands.push(storeItem[i].brand);
		}
		if (!uniqueOs.includes(storeItem[i].os)) {
			uniqueOs.push(storeItem[i].os);
		}
	}
	console.log(uniqueBrands, uniqueOs, "list");
	var inp =
		'<div id="drop"><input id="myInput" type="text" placeholder="Search by Id or Name"></input>';
	var dropdownBrands =
		inp +
		'<select id="brandNames" name=" brands"><option value=\'Brand\'>Brand</option> ';
	for (var i = 0; i < uniqueBrands.length; i++) {
		dropdownBrands +=
			"<Option value=" + uniqueBrands[i] + " >" + uniqueBrands[i] + "</option>";
	}
	dropdownBrands += "</select>";
	var dropdownOs =
		dropdownBrands +
		'<select id="brandOs" name=" brands"><option value=\'Os\'>Os</option>';
	for (var i = 0; i < uniqueOs.length; i++) {
		dropdownOs +=
			"<Option data-value=" + uniqueOs[i] + " >" + uniqueOs[i] + "</option>";
	}
	dropdownOs += "</select><button id=\"search\">Search</button></div>";
	$("#selectbox").html(dropdownOs)
	
}
function display(selected) {
	
	var data =
		'<div><table id="mytable">\
    <tr>\
        <th>ID</th>\
        <th>Name</th>\
        <th>Brand</th>\
        <th>Operating System</th>\
        <th>Remove</th>\
    </tr><tbody id="tbody">';
	
	for (var i = 0; i < selected.length; i++) {
		data +=
			"<tr id= '" +
			selected[i].id +
			"'>\
		<td id=\"id\" value='" +
			selected[i].id +
			"' >" +
			selected[i].id +
			'</td>\
        <td id="name" value=\'' +
			selected[i].name +
			"'\">" +
			selected[i].name +
			" </td>\
        <td value='" +
			selected[i].brand +
			"'\">" +
			selected[i].brand +
			"</td>\
        <td value='" +
			selected[i].os +
			"'\">" +
			selected[i].os +
			"</td>\
        <td data-value='" +
			selected[i].id +
			"'id='close'>X</td>\
      </tr>";
	}

	data += "</tbody></table></div>";

	$("#main").html(data);
}
$(document).ready(function () {
	uniqueValues()
	display(storeItem)
	$(document).on("change", "#wrapper", function () {
	dropdown();
	})
	search()
	$("#main").on("click", "#close", function () {
		var id = $(this).data("value");
		console.log(id);
		$(this).parent().hide();
	});
});