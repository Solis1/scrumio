$(document).ready(() =>{
  
  $("#closeSideModal").click(()=>{
    $("#mySidenav").width("0px");
    $("#mySidenav").css("overflow-y","hidden");
    $("#overlay").width("0");
    $("#overlay").css("opacity","0.9");
  });

  $("#openSideModal").click(()=>{
    $("#mySidenav").width("521px");
    $("#mySidenav").css("overflow-y","visible");
    $("#overlay").width("100%");
    $("#overlay").css("opacity","0.5");
  });
  $("#overlay").click(()=>{
    $("#mySidenav").width("0px");
    $("#mySidenav").css("overflow-y","hidden");
    $("#overlay").width("0");
    $("#overlay").css("opacity","0.9");
  });

  var dialog;
  $("#addTeam").click(()=>{
    body = `<div id="modalAddTeam">
              <h4>Crear Nuevo Equipo</h4>
              <div class="form-group">
                <label>Nombre</label>
                <input id="createTeam" type="text" placeholder="Escribe el nombre de tu proyecto" class="form-control"/>
              </div>
              <h5>Seleccionar Miembros</h5>
              <div class="choose-team">
                <img src="images/abrazame.png" class="img-fluid"/>
                <p>Oh oh! Parece que aún no tienes miembros para armar tu equipo! Agrega unos desde la pestaña de miembros o da clic <a href="#">aqui</a>.</p>
              </div>
              <div class="float-right">
                <button class="closeModal">Cancelar</button>
              </div>
            </div>`;

    dialog = bootbox.dialog({
      message: body,
      closeButton: true
    });
  });

  $(document).on("click", ".closeModal", ()=>{
    dialog.modal("hide");
  });

});
