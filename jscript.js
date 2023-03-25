

document.addEventListener("keypress", function(event) {

    //press s to start
    if (event.keyCode == 115) {
        $('#myModal-1').modal('show'); 
        setTimeout(() => {
            window.location.href = 'split-screen.html';
        }, 3000);
    }


  });