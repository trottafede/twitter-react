import "./News.css";
import React from "react";
function News() {
  return (
    <div className="col-lg-4">
      <div className="profile-header">
        <div>
          <h4 className="text-center">Noticias</h4>
          <hr />
          <h5>Bootcamp Hack Academy 2021</h5>
          <h6>Proyecto Twitter con React</h6>
          <p>
            Proyecto con ReactJS en el front, usando MongoDB como base de datos
            en el back.
          </p>
          <button className="btn btn-secondary">Leer más</button>
          <hr />
        </div>

        <div>
          <h5>Estudiante de HA fue contratado por la nasa.</h5>
          <p>
            Pero Elon Musk quiere reclutarlo en SpaceX porque está muy despegado
            con HTML...
          </p>
          <button className="btn btn-secondary">Leer más</button>
          <hr />
        </div>

        <div>
          <h5>Son los br realmente malos? </h5>
          <p>
            Conozca todas las buenas prácticas de programación para que no
            sufran más gatitos.
          </p>
          <button className="btn btn-secondary ">Leer más</button>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default News;
