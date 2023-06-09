(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const c=[{nombre:"Stranger Things",año:2016,descripcion:"Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño pueblo de los años 80.",imagen_url:"https://upload.wikimedia.org/wikipedia/en/6/6e/Stranger_Things_characters.png"},{nombre:"La Casa de Papel",año:2017,descripcion:"Un enigmático personaje llamado 'El Profesor' recluta a ocho personas para llevar a cabo un ambicioso plan: atracar la Casa de la Moneda de España.",imagen_url:"https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"},{nombre:"Black Mirror",año:2011,descripcion:"Una serie antológica que explora la relación entre la tecnología y la sociedad, presentando historias oscuras y distópicas.",imagen_url:"https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg"},{nombre:"Breaking Bad",año:2008,descripcion:"Un profesor de química diagnosticado con cáncer se convierte en un despiadado fabricante y vendedor de metanfetaminas para asegurar el futuro financiero de su familia.",imagen_url:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg"},{nombre:"The Crown",año:2016,descripcion:"La serie sigue la vida de la Reina Isabel II y los eventos históricos que tuvieron lugar durante su reinado.",imagen_url:"https://www.elindependiente.com/wp-content/uploads/2021/08/the-crown-serie-netflix.jpg"}],i={template:`
        <main class="container pt-5">
			<div class="row">
				<div class="col-12">
          <p class="text-end">Bienvenido <span>usuario@email.com</span></p>
					<h1 class="text-center mt-3 ">Series famosas de todos los tiempos</h1>
          <p class="text-center fs-4 p-3 bg-light border">Haz clic sobre cualquier ficha para mostrar toda la información en el panel derecho</p>
				</div>
				<div class="col-6">
          <div class="row">
            <!-- card -->
            <div class="col-4">
              <div class="card shadow mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Stranger Thinks</h5>
                </div>
              </div>
            </div>
            <!-- card -->
            <div class="col-4">
              <div class="card shadow mt-2">
                <img
                  src="https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center">La casa de papel</h5>
                </div>
              </div>
            </div>
            <!-- card -->
            <div class="col-4">
              <div class="card shadow mt-2">
                <img
                  src="https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Black Mirrow</h5>
                </div>
              </div>
            </div>
            <!-- card -->
            <div class="col-4">
              <div class="card shadow mt-2">
                <img
                  src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Breaking bad</h5>
                </div>
              </div>
            </div>
            <!-- card -->
            <div class="col-4">
              <div class="card shadow mt-2">
                <img
                  src="https://www.elindependiente.com/wp-content/uploads/2021/08/the-crown-serie-netflix.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-center">The Crown</h5>
                </div>
              </div>
            </div>
          </div>
					
				</div>
				<!-- ficha ampliada -->
				<div class="col-6">
					<div class="card shadow mt-2">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h3>Stranger Thinks</h3>
							<hr />
							<p><strong>Año: </strong><span>2017</span></p>
							<p>
								<strong>Descripción: </strong>
								<span>
									Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño
									pueblo de los años 80.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
    `,script:()=>{console.log("Hola soy la vista Home")}},t={template:`
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
    
    `,script:()=>{console.log("Hola soy el login"),document.querySelector("#login").addEventListener("click",()=>{console.log("click en login"),router.login()})}};console.log("hola");console.log(c);document.querySelector("header").innerHTML=t.template;t.script();document.querySelector("main").innerHTML=i.template;i.script();
