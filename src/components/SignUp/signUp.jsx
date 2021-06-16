import React from "react";

function signUp() {
  return (
    <div>
      <section id="main_page">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="registro">
                <form
                  class="row g-3 needs-validation"
                  action="/signUp"
                  method="POST"
                  novalidate
                >
                  <div class="mb-3 d-flex justify-content-center">
                    <h1>Registrese</h1>
                  </div>

                  <div class="mb-3 col-sm-4">
                    <label for="firstName" class="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Nombre"
                      required
                      minlength="4"
                    />
                    <div class="valid-feedback">Todo ok!</div>
                    <div class="invalid-feedback">Ingresa nombre.</div>
                    <div class="invalid-feedback">Minimo 4 dígitos</div>
                  </div>

                  <div class="mb-3 col-sm-4">
                    <label for="lastName" class="form-label">
                      Apellido
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      class="form-control"
                      name="lastName"
                      placeholder="Apellido"
                      required
                      minlength="4"
                    />
                    <div class="valid-feedback">Todo ok!</div>
                    <div class="invalid-feedback">Ingresa apellido</div>
                    <div class="invalid-feedback">Minimo 4 dígitos</div>
                  </div>

                  <div class="mb-3 col-sm-4">
                    <label for="username" class="form-label">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      class="form-control"
                      name="userName"
                      placeholder="Nombre de usuario"
                      required
                      minlength="4"
                    />
                    <div class="valid-feedback">Todo ok!</div>
                    <div class="invalid-feedback">Ingresa nombre</div>
                    <div class="invalid-feedback">Minimo 4 dígitos</div>
                  </div>

                  <div class="mb-3 col-sm-6">
                    <label for="email" class="form-label">
                      e-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="suemail@algo.com"
                      required
                    />
                    <div class="valid-feedback">Todo ok!</div>
                    <div class="invalid-feedback">Ingresa email válido</div>
                  </div>

                  <div class="mb-3 col-sm-6">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="password"
                      required
                      minlength="4"
                    />
                    <div class="valid-feedback">Todo ok!</div>
                    <div class="invalid-feedback">Ingresa password</div>
                    <div class="invalid-feedback">Minimo 4 dígitos</div>
                  </div>

                  <div class="mb-3">
                    <a href="/signIn">
                      <small>¿Ya tienes una cuenta?</small>
                    </a>
                  </div>
                  <div class="mb-3 d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="submit">
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-md-12 col-lg-6">
              <div>
                <div class="backgroundIMG"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default signUp;
