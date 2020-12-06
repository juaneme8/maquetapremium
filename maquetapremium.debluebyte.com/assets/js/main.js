
$(document).ready(function() {

    //JS PARA MOSTRAR/OCULTAR BLOQUES DE LISTA.PHP
    /*$(".enterpriseUl .empresaLi a").click(function() {

    }*/

    $('.ui.accordion').accordion({'exclusive': false});

    $('.enterpriseUl .anchorBtn').click(function() {
        $(this).find("i").toggleClass("fa-chevron-down fa-chevron-right");
        var $elem = $(this).parent().next("div");
        $($elem).slideToggle('slow');
    });

    $('.contractAll a').click(function() {
        if($(".enterpriseUl .contZona").is(":visible")){
            $(this).removeAttr("data-tooltip");
            $(this).attr("data-tooltip", "Expandir todo");
            $(".enterpriseUl .contZona").hide(500);

            if($(".enterpriseUl .empresaLi").find("i").hasClass("fa-chevron-down")){
                $(".enterpriseUl .empresaLi").find("i").removeClass("fa-chevron-down");
                $(".enterpriseUl .empresaLi").find("i").addClass("fa-chevron-right");
            }else{
                if($(".enterpriseUl .empresaLi").find("i").hasClass("fa-chevron-right")){
                    $(".enterpriseUl .empresaLi").find("i").removeClass("fa-chevron-right");
                    $(".enterpriseUl .empresaLi").find("i").addClass("fa-chevron-down");
                }
            }

        }else{
            if($(".enterpriseUl .contZona").is(":hidden")){
                $(this).removeAttr("data-tooltip");
                $(this).attr("data-tooltip", "Contraer todo");
                $(".enterpriseUl .contZona").show(500);

                if($(".enterpriseUl .empresaLi").find("i").hasClass("fa-chevron-down")){
                    $(".enterpriseUl .empresaLi").find("i").removeClass("fa-chevron-down");
                    $(".enterpriseUl .empresaLi").find("i").addClass("fa-chevron-right");
                }else{
                    if($(".enterpriseUl .empresaLi").find("i").hasClass("fa-chevron-right")){
                        $(".enterpriseUl .empresaLi").find("i").removeClass("fa-chevron-right");
                        $(".enterpriseUl .empresaLi").find("i").addClass("fa-chevron-down");
                    }
                }
            }

        }
    });



    //JS DEL MENU SIDEBAR
    $(".main-menu").on({
        mouseenter: function () {

            if($("body").hasClass("indexSelector") || $("body").hasClass("plantaSelector") || $("body").hasClass("mapaSelector")){
                $(".main-menu .resumenSection .content").addClass("active");
                $(".main-menu .resumenSection .content ul").removeClass("hidden");
                $(".main-menu .resumenSection .title").addClass("active");
            }else{
                if($("body").hasClass("instantaneosSelector") || $("body").hasClass("historicosSelector") || $("body").hasClass("calidadSelector") || $("body").hasClass("standBySelector") || $("body").hasClass("eventosSelector")){
                    $(".main-menu .analisisSection .content").addClass("active");
                    $(".main-menu .analisisSection .content ul").removeClass("hidden");
                    $(".main-menu .analisisSection .title").addClass("active");
                }
            }

            $(".main-menu").css("width", "215px");
            $(".main-menu").css("background", "#3B74A8");
            $(".nav-text").css("display", "inline-block");
            $(".title").removeClass("withoutAfter");
            $(".dimDiv").css("display", "block");
            $(".logout li a i").removeClass("fa-chevron-right");
            $(".logout li a i").addClass("fa-chevron-left");
            $(".logout li").css("width", "215px");
            $(".main-menu .accordionUl .accordion").css("background", "#3B74A8");
            $(".main-menu .simulatedMenu i").removeClass("fa-bars");
            $(".main-menu .simulatedMenu i").addClass("fa-times");
        },
        mouseleave: function () {

            /*if($("body").hasClass("indexSelector") || $("body").hasClass("plantaSelector") || $("body").hasClass("mapaSelector")){
                $(".main-menu .resumenSection .content").removeClass("active");
                $(".main-menu .resumenSection .title").removeClass("active");
                $(".main-menu .analisisSection .content").removeClass("active");
                $(".main-menu .analisisSection .title").removeClass("active");
            }else{
                if($("body").hasClass("instantaneosSelector") || $("body").hasClass("historicosSelector") || $("body").hasClass("calidadSelector") || $("body").hasClass("standBySelector") || $("body").hasClass("eventosSelector")){
                    $(".main-menu .analisisSection .content").removeClass("active");
                    $(".main-menu .analisisSection .title").removeClass("active");
                    $(".main-menu .resumenSection .content").removeClass("active");
                    $(".main-menu .resumenSection .title").removeClass("active");
                }
            }*/

            $(".main-menu .content").removeClass("active");
            $(".main-menu .title").removeClass("active");


            $(".main-menu").css("width", "70px");
            $(".main-menu").css("background", "#FFFFFF");
            $(".nav-text").css("display", "none");
            $(".title").addClass("withoutAfter");
            $(".dimDiv").css("display", "none");
            $(".logout li a i").removeClass("fa-chevron-left");
            $(".logout li a i").addClass("fa-chevron-right");
            $(".logout li").css("width", "70px");
            $(".main-menu .accordionUl .accordion").css("background", "#FFFFFF");
            $(".main-menu .simulatedMenu i").removeClass("fa-times");
            $(".main-menu .simulatedMenu i").addClass("fa-bars");
        }
    });

    //JS DEL MODAL DE SELECCIONAR DISPOSITIVO


    var selectedOrganizacion = "";
    var totalTextToInput = "";

    $(".organizacionCol ul li button").click(function() {
        $(".organizacionCol ul li button").removeClass("active");
        $(this).addClass("active");

        if($(this).text().indexOf('Dispositivo')){
            $(".gruposCol").css("display", "inline-block");
        }else{
            $(".gruposCol").css("display", "none");
        }

        $(".gruposCol ul li button").removeClass("active");

        $(".actions p").children("span").text("");
        $(".actions p").children("span").text($(this).text());

        selectedOrganizacion = $(this).text() + " - ";
        totalTextToInput = $(this).text();
    });

    $(".gruposCol ul li button").click(function() {
        $(".gruposCol ul li button").removeClass("active");
        $(this).addClass("active");

        $(".actions p").children("span").text("");
        $(".actions p").children("span").text(selectedOrganizacion + $(this).text());
        totalTextToInput = "";
        totalTextToInput = selectedOrganizacion + $(this).text();
    });

    $(".addTextToInput").click(function() {
        var alreadyInInput = $(".openSelectModal").val();

        if($("body").hasClass("instantaneosForm") || $("body").hasClass("historicosForm")){
            if(alreadyInInput === ""){
                $(".addLiToEdit").append('<li class="grupoLi" style="position:relative;">' + totalTextToInput + '<div class="deleteSelectionEdit"><i class="fas fa-times"></i></div></li>');
                $(".openSelectModal").val(alreadyInInput + totalTextToInput);
            }else{
                $(".addLiToEdit").append('<li class="grupoLi">' + totalTextToInput + '<div class="deleteSelectionEdit"><i class="fas fa-times"></i></div></li>');
                $(".openSelectModal").val(alreadyInInput + " / " + totalTextToInput);
            }
        }else{
            $(".openSelectModal").val(totalTextToInput);
        }
        $(".organizacionCol ul li button").removeClass("active");
        $(".gruposCol ul li button").removeClass("active");
        $(".actions p").children("span").text("");
        $('.ui.modal').modal('hide');
    });

    $(".cancelTextToInput").click(function() {
        $('.ui.modal').modal('hide');
        $(".organizacionCol ul li button").removeClass("active");
        $(".gruposCol ul li button").removeClass("active");
        $(".actions p").children("span").text("");
        totalTextToInput = "";
        selectedOrganizacion = "";
    });

    //NUEVOS BOTONES DE EDITAR MODAL-----------------------------------------------

    /*$(".cancelTextToInputEdit").click(function() {
        $('.ui.modal').modal('hide');
    });*/

    $(".addTextToInputEdit").click(function() {
        $('.ui.modal').modal('hide');
    });

    $(".deleteAllElements").click(function() {
        $('.confirmDeleteAll').modal('show');
    });

    $(".confirmDelete").click(function() {
        $(".openSelectModal").val("");
        $('.confirmDeleteAll').modal('hide');
        $(".addLiToEdit .grupoLi").remove();
    });

    $(".cancelDelete").click(function() {
        $('.confirmDeleteAll').modal('hide');
        $('.dispositivosModalEditInsta').modal('show');
    });


    $(document).on('click', '.addLiToEdit .grupoLi .deleteSelectionEdit', function(){
        var toDeleteText = $(this).parents("li").text();
        var textWhereDelete = $(".openSelectModal").val();
        textWhereDelete = textWhereDelete.replace(toDeleteText + " / ", "");
        textWhereDelete = textWhereDelete.replace(toDeleteText, "");
        textWhereDelete = textWhereDelete.replace(" / " + toDeleteText, "");
        $(".openSelectModal").val(textWhereDelete);
        $(this).parents("li").remove();
    });

    //NUEVOS BOTONES DE EDITAR MODAL-----------------------------------------------

    $(".cancelAndDismiss").click(function() {
        $('.ui.modal').modal('hide');
    });

    //JS PARA MOVER DISPOSITIVOS DE UN LADO AL OTRO EN LISTA.PHP
    $('#btnRight').click(function(e) {
        var selectedOpts = $('#lstBox1 option:selected');
        if (selectedOpts.length == 0) {
            alert("Ningun dispositivo seleccionado.");
            e.preventDefault();
        }

        $('#lstBox2').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });

    $('#btnLeft').click(function(e) {
        var selectedOpts = $('#lstBox2 option:selected');
        if (selectedOpts.length == 0) {
            alert("Ningun dispositivo seleccionado.");
            e.preventDefault();
        }

        $('#lstBox1').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });

    $('#btnRightAll').click(function(e) {
        var selectedOpts = $('#lstBox1 option');

        $('#lstBox2').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });

    $('#btnLeftAll').click(function(e) {
        var selectedOpts = $('#lstBox2 option');

        $('#lstBox1').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });


    //JS PARA MOSTRAR FORMULARIO CONTEXTUAL EN LISTA.PHP
    $(".deviceColumn ul li button").click(function() {
        $(".deviceColumn ul li button").removeClass("active");
        $(this).addClass("active");

        $("#enterpriseForm").css("display", "none");
        $("#zonaForm").css("display", "none");
        $("#localizacionForm").css("display", "none");
        $("#subLocalizacionForm").css("display", "none");
        $("#dispositivoForm").css("display", "none");


        if($(this).hasClass("enterpriseBtn")){
            $("#enterpriseForm").css("display", "block");
        }else{
            if($(this).hasClass("zonaBtn")){
                $("#zonaForm").css("display", "block");
            }else{
                if($(this).hasClass("localizacionBtn")){
                    $("#localizacionForm").css("display", "block");
                }else{
                   if($(this).hasClass("sublocalizacionBtn")){
                        $("#subLocalizacionForm").css("display", "block");
                    }else{
                        if($(this).hasClass("dispositivoBtn")){
                            $("#dispositivoForm").css("display", "block");
                        }else{
                            if($(this).hasClass("groupGrupoBtn")){
                                $("#editGroupForm").css("display", "block");
                                $("#newGroupForm").css("display", "none");
                            }
                        }
                    }
                }
            }
        }


    });

    //JS DE ABRIR MODAL DE SELECCION DE DISPOSITIVOS
    $('.openSelectModal').click(function () {
        $('.ui.modal.dispositivosModal').modal('show');
    });

    //JS DE ABRIR MODAL DE SELECCION DE EDITAR DISPOSITIVOS
    $('#openEditModal').click(function () {
        $('.ui.modal.dispositivosModalEditInsta').modal('show');
    });

    //JS DE ABRIR MODAL DE SELECCION DE NUEVO...
    $('#openNewForm').click(function () {
        $('.ui.modal.newFormModal').modal('show');
        $('#newForm .dropdown').removeClass('active');
        $('#newForm .dropdown').removeClass('visible');
    });

    //JS DE MOSTRAR FORMULARIO SEGUN LA SELECCION DE QUE SE QUIERE CREAR
    $('.nextFormClose').click(function () {
        $("#enterpriseForm").css("display", "none");
        $("#zonaForm").css("display", "none");
        $("#localizacionForm").css("display", "none");
        $("#subLocalizacionForm").css("display", "none");
        $("#dispositivoForm").css("display", "none");

        if($("#newForm .getVlueOfNewSelect").val() == "seleccionar"){
            console.log("No se selecciono nada")
        }else{
            if($("#newForm .getVlueOfNewSelect").val() == "empresa"){
                $("#enterpriseForm").css("display", "block");
                $(".configSelect span").text("Dispositivos");
                $(".enterpriseUl").css("display", "block");
                $(".groupeUl").css("display", "none");
                $("#newGroupForm").css("display", "none");
                $("#editGroupForm").css("display", "none");
            }else{
                if($("#newForm .getVlueOfNewSelect").val() == "zona"){
                    $("#zonaForm").css("display", "block");
                    $(".configSelect span").text("Dispositivos");
                    $(".enterpriseUl").css("display", "block");
                    $(".groupeUl").css("display", "none");
                    $("#newGroupForm").css("display", "none");
                    $("#editGroupForm").css("display", "none");
                }else{
                   if($("#newForm .getVlueOfNewSelect").val() == "localizacion"){
                       $("#localizacionForm").css("display", "block");
                       $(".configSelect span").text("Dispositivos");
                       $(".enterpriseUl").css("display", "block");
                       $(".groupeUl").css("display", "none");
                       $("#newGroupForm").css("display", "none");
                       $("#editGroupForm").css("display", "none");
                    }else{
                        if($("#newForm .getVlueOfNewSelect").val() == "sublocalizacion"){
                            $("#subLocalizacionForm").css("display", "block");
                            $(".configSelect ").text("Dispositivos");
                            $(".enterpriseUl").css("display", "block");
                            $(".groupeUl").css("display", "none");
                            $("#newGroupForm").css("display", "none");
                            $("#editGroupForm").css("display", "none");
                        }else{
                            if($("#newForm .getVlueOfNewSelect").val() == "grupo"){
                                $(".enterpriseUl").css("display", "none");
                                $(".groupeUl").css("display", "block");
                                $("#newGroupForm").css("display", "block");
                                $(".configSelect span").text("Grupos");
                                $("#editGroupForm").css("display", "none");
                            }
                        }
                    }
                }
            }
        }

        $('.ui.modal.newFormModal').modal('hide');
        openModalFormNew = false;
        $(".deviceColumn ul li button").removeClass("active");
    });

    $('#showGroupeUl').click(function () {

        $("#enterpriseForm").css("display", "none");
        $("#zonaForm").css("display", "none");
        $("#localizacionForm").css("display", "none");
        $("#subLocalizacionForm").css("display", "none");
        $("#dispositivoForm").css("display", "none");

        $(".enterpriseUl").css("display", "none");
        $(".groupeUl").css("display", "block");
    });

    $('#showEnterpriseUl').click(function () {

        $("#enterpriseForm").css("display", "none");
        $("#zonaForm").css("display", "none");
        $("#localizacionForm").css("display", "none");
        $("#subLocalizacionForm").css("display", "none");
        $("#dispositivoForm").css("display", "none");
        $("#newGroupForm").css("display", "none");
        $("#editGroupForm").css("display", "none");
        $(".groupeUl").css("display", "none");
        $(".enterpriseUl").css("display", "block");
    });
});

$(window).on('load',function(){
    var currentLocation = window.location.href;
    console.log(currentLocation);
    if(currentLocation.indexOf("New") != -1){
        $('.newFormModal').modal('show');
    }else{
        if(currentLocation.indexOf("Group") != -1){
            $(".enterpriseUl").css("display", "none");
            $(".groupeUl").css("display", "block");
            $(".configSelect span").text("Grupos");
        }
    }
});
