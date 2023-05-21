function getir(){
    const musteri={
        isim:$("#isim").val(),
        adres:$("#adres").val()
    };
    $.post("/",musteri,function (data){
        $("#yazIsim").html(data.isim);
        $("#yazAdres").html(data.adres);
    });
    $("#isim").val("");
    $("#adres").val("");
}