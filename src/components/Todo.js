import React from "react";

function Todo({ title, describe, completed, done }) {
  return (
    <article className="card mb-3">
      <div className="card_body p-3">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">{title}</h3>
          <button className="border-0 bg-transparent" onClick={()=>done(completed)}>
            {completed ? <i className="bi bi-check-square-fill text-success fs-4"></i> : <i className="bi bi-check-square text-success fs-4"></i>}
          </button>
        </div>
        <hr />
        <p className="card-text">{describe}</p>
        <div className="row justify-content-end mt-4 gx-1">
          <button className="btn btn-sm btn-primary col-6 col-sm-3 m-2">
            Editar
          </button>
          <button className="btn btn-sm btn-danger col-6 col-sm-3 m-2">
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

export default Todo;
