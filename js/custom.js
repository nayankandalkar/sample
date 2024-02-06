 


// const scriptURL = 'https://script.google.com/macros/s/AKfycbxpErz8oIYDNRCuth4lkoqRHMquLrEeLoDaApf-PHK0xBnqvUSRpboqDI6VzLady1EP/exec'


const scriptURL = 'https://script.google.com/macros/s/AKfycbw0oyogsTKl49Gis17Yr3KIaXdUphoqeU9NT6fqkhcVZ05tJw6W7-hlHXBE4Zup2ok/exec'



const form = document.forms['submit-to-google-sheet']


















form.addEventListener('submit', e => {
    const currentTime = new Date().toLocaleString();

    // Append current time to form data
    const formData = new FormData(form);
    formData.append('Datetime', currentTime);

    e.preventDefault();

    fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then((res)=>res.text()).then((finalres)=>{
            //  e.target.btn.innerHTML="submit"
      
            
      
            //  delete1.style.display="block"
      
              setTimeout(()=>{
                 // delete1.style.display="none"
              },4000)
      
              form.reset();
              console.log(finalres)
          })
      
      
        
        .catch(error => {
            // console.error('Error!', error.message);
            displayAlert("Failed to submit response. Please try again later.", "danger");
        });
});








// form.addEventListener("submit" ,(e)=>{
        

//     //e.target.btn.innerHTML="submitting..........."


//     let d=new FormData(form);

// try{

// fetch(url,{
//         method:"POST",
//         body:d
//     }).then((res)=>res.text()).then((finalres)=>{
//       //  e.target.btn.innerHTML="submit"

      

//       //  delete1.style.display="block"

//         setTimeout(()=>{
//            // delete1.style.display="none"
//         },4000)

//         form.reset();
//         console.log(finalres)
//     })




// }catch(e){
// e.target.btn.innerHTML=e;
// console.log(e);
// }
    

//     e.preventDefault();

// })














