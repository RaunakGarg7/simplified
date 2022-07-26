const applyFilter = async () => {
    const where_tableId = document.getElementById('where_tableId').value;
    let tableId = where_tableId.split(",")
    const arr_tableId = tableId.map(str => {
      return Number(str);
    });

    var settings = {
        "url": "http://localhost:3000/filters",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "where_tableId": arr_tableId
          // "groupby": groupby
        }),
    };
      
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}