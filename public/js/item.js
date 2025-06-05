$(document).ready(function () {
    const access_token = localStorage.getItem('token')
    $('#itable').DataTable({
        ajax: {
            url: "/api/items",
            dataSrc: "",
            headers: {
                "Authorization": "Bearer " + access_token 
            },
        },
        dom: 'Bfrtip',
        buttons: [
            'pdf',
            'excel',
            {
                text: 'Add item',
                className: 'btn btn-primary',
                action: function (e, dt, node, config) {
                    $("#iform").trigger("reset");
                    $('#itemModal').modal('show');
                    $('#itemUpdate').hide();
                    $('#itemImage').remove()
                }
            }
        ],
        columns: [
            { data: 'item_id' },
            {
                data: null,
                render: function (data, type, row) {
                    console.log(data.img_path)
                    // return `<img src="/storage/${data.img_path}"  width="50" height="60">`; 
                    return `<img src=${data.image}  width="50" height="60">`;
                }
            },

            { data: 'description' },
            { data: 'cost_price' },
            { data: 'sell_price' },
            { data: 'stock.quantity' },
            {
                data: null,
                render: function (data, type, row) {
                    return "<a href='#' class = 'editBtn' id='editbtn' data-id=" + data.item_id + "><i class='fas fa-edit' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id=" + data.item_id + "><i  class='fas fa-trash-alt' style='font-size:24px; color:red' ></a></i>";
                }
            }
        ],
    });
})