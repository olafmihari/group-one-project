import React from "react";

function ModalBox({ data, onClose }) {
  function handleClick() {
    window.location.href = data.game_url;
  }
    function handleClick2() {
    window.location.href= data.freetogame_profile_url;
  }

  
    return (
      <div
        className="modal-fade-show"
        id={data.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={handleClick2}>View Game Profile</button>
              <h5 className="modal-title" id="modalLabel">
                {data.title}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="card-img-bottom"
                src={data.thumbnail}
                alt={data.title}
                style={{width:750}}>
               </img>
              <label>Description</label>
              <p className="card-text">{data.short_description}</p>
              <label>Genre</label>
              <p>{data.genre}</p>
              <label>Platform</label>
                <p className="card-text">{data.platform}</p>
            </div>
            <div className="modal-footer">
            <button onClick={handleClick}>Play Game</button>

              
              <button
                type="button"
                className="btn btn-default"
                id="close-btn"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
                  
                </div>
    )

}

export default ModalBox;


