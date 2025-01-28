import React from 'react';
export const HerCard = (
    {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters}
      ) => {
        console.log("Aqui Id del heroe: ",id)
  return (
    <div className="card ms-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`./assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego !== characters)
                        && <p className="card-text">{characters}</p>
                    }
                    <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                </div>
            </div>
        </div>
    </div>
  )
}
