window.onload = function() {
    const toggle = document.getElementById('toggle');
    const slideBlock = document.getElementsByClassName('slide-block')[0];
    const body = document.getElementById("body");
    const wrapper = document.getElementById("wrapper");
    const joke = document.getElementById("joke");
    let flag =0;

    toggle.addEventListener('change', function(e) {
      if(flag==0) {
        body.style.backgroundColor="White";
        wrapper.style.backgroundColor="white";
        wrapper.style.boxShadow="20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
        
        joke.style.color="black";
        
        // document.getElementsByClassName("slider").style.backgroundColor="black"
        flag=1;
    }else{
        body.style.backgroundColor="#292826"
        wrapper.style.backgroundColor="#15151A"
        wrapper.style.boxShadow="20px 20px 40px rgba(214, 167, 81, 0.1), -20px -20px 60px rgba(214, 167, 81, 0.1)"
        joke.style.color="white";

        flag=0
      }
    });
  };
  
  
