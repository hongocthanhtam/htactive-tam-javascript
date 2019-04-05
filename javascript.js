var store;

$.ajax({ 
    type: 'GET', 
    url: './products.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        for(let i=0;i<data.length;i++){
            // var markup = "<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td>"+ "</td><td>" + data[i].price + "</td>"+ "</td><td>" + data[i].type + "</td><tr>";
            var markup = `<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].price}</td>
                            <td>${data[i].type}</td>
                          </tr>`
            $(".all_product_table").append(markup);
        }
        store = data;
    },
});
function search(){
    var s = document.getElementById('id_search').value;
    var id;
    var name;
    var price;
    var type;
    $(".related_table").find("td").remove();
    for(let i=0;i<store.length;i++){
        if(s === store[i].id){
            id = store[i].id;
            name = store[i].name;
            price = store[i].price;
            type = store[i].type;
        
        document.getElementById("id").innerHTML = id;
        document.getElementById("name").innerHTML = name;
        document.getElementById("price").innerHTML = price;
        document.getElementById("type").innerHTML = type;
            if(store[i+1].price === store[i].price || store[i+1].type === store[i].type){
                var markup = `  <tr><td>${store[i+1].id}</td>
                                <td>${store[i+1].name}</td>
                                <td>${store[i+1].price}</td>
                                <td>${store[i+1].type}</td></tr>`
                $(".related_table").append(markup);
            }
        }
    }
}