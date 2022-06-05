import React from "react";
import { Link } from "react-router-dom";

function EditObservationButton({ observationId }) {
  
    return (
        <>
          <Link to={`/observations/${observationId}/edit`} 
            type="button" 
            className="btn btn-outline-secondary btn-sm"
            >
            Edit Observation
          </Link>
        </>
    );
}

export default EditObservationButton;