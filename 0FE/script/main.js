$( document ).ready(function() {
    console.log( "main ready!" );
    getList()
});



function getList(){
    $.ajax({
        url: `${baseUrl}/tests`
    })
    .done(result=>{
        console.log('result\n', result)
        $("#list-container").empty()
        result.forEach(el => {
            $("#list-container").append(`
            <div class="card mt-3">
                <div class="card-header">
                    ${el.id}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Payload</h5>
                    <p class="card-text">${el.payload ? el.payload : ''}</p>
                
                </div>
            </div>
            
            `)
        });
    })
    .fail(err=>{
        console.log('error \n', err)
    })
}