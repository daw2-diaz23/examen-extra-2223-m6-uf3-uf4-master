export const header = {
    template: `
    <header class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0">2223 M6 UF3/UF4 - Examen extraordinaria - (Alumnno: Pepito Lospalotes)</span>
        <form  class="d-flex">
          <input class="form-control me-2" placeholder="email@email.com">
          <button id="login" class="btn btn-outline-success">Login</button>
          <button class="btn btn-link">Regístrate</button>
        </form>
        
      </div>
    </header>
    
    `,
    script: ()=>{
        console.log('Hola soy el login')
        document.querySelector('#login').addEventListener('click', ()=>{
            console.log('click en login')
            router.login()
        });
     
    }
}