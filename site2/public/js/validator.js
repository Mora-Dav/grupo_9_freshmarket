window.addEventListener ('load', () =>{

    console.log('documento vinculado con exito')

    let form = document.querySelector('.form-log')
    let name = document.querySelector('#regName')
    let errorName = document.querySelector('#errorName')
    let lastname = document.querySelector('#regLastname')
    let tel = document.querySelector('#regPhone')
    let dni = document.querySelector('#regDni')
    let gender = document.querySelector('#regGender')
    let email = document.querySelector('#regEmail')
    let avatar = document.querySelector('#regAvatar')
    let password = document.querySelector('#regPassword')

    let button = document.querySelector('button')

    button.addEventListener('click', function(event){
        
        if(name.value.length < 2){
            errorName.style.display = 'block'            
        }else{ 
            errorName.style.display = 'none'
        };

        if(lastname.value.length < 2){
            errorlastname.style.display = 'block'            
        }else{ 
            errorlastname.style.display = 'none'
        };

        
        
        event.preventDefault();
 
        


         
    });






})



