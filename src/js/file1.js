 window.onscroll = function() {
    myFunction();
    // scrollFunction();
  };

  function myFunction() {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
      document.getElementById( "home" ).className = "fixed-header";
    } else {
      document.getElementById( "home" ).className = "header";
    }
  }

  function openNav() {
  console.log('openNav');
    document.getElementById("mySidenav").style.width = "700px";
}

function closeNav() {
  console.log('closeNav');  
    document.getElementById("mySidenav").style.width = "0px";
}
