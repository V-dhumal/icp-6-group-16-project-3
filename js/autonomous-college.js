function changeImage(fileName){
    let img=document.querySelector('#image1');
    img.setAttribute("src",fileName);
  }
  function changeImage1(fileName){
    let img=document.querySelector('#image2');
    img.setAttribute("src",fileName);
    
  }
  function changeImage2(fileName){
    let img=document.querySelector('#image3');
    img.setAttribute("src",fileName);
  }
  function changeImage3(fileName){
    let img=document.querySelector('#image4');
    img.setAttribute("src",fileName);
  }
  function changeImage4(fileName){
    let img=document.querySelector('#image5');
    img.setAttribute("src",fileName);
  }
  function changeImage5(fileName){
    let img=document.querySelector('#image6');
    img.setAttribute("src",fileName);
  }
  function changeImage6(fileName){
    let img=document.querySelector('#image7');
    img.setAttribute("src",fileName);
  }
  function changeImage7(fileName){
    let img=document.querySelector('#image8');
    img.setAttribute("src",fileName);
  }
  function changeImage8(fileName){
    let img=document.querySelector('#image9');
    img.setAttribute("src",fileName);
  }
  
  let isOpen = false;
  function togglesidebae()
  {
  const sidebar = document.getElementById('sidebar');
  if(isOpen)
  {
     sidebar.classList.add('sidebar-closed');
     isOpen = false;
  }
  else
  {
     sidebar.classList.remove('sidebar-closed');
     isOpen = true;
  }
  }