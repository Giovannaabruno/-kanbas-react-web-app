export default function AssigmentPopUp({ dialogTitle, assigmentName,  deleteAssignment }:
    { dialogTitle: string; assigmentName: string;  deleteAssignment: () => void; }) {
      return (
        <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <h4>{assigmentName}</h4>
                <p>Are you sure you want to remove this assignment?</p>
             
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  No </button>
                <button onClick={deleteAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                  Yes </button>
              </div>
            </div>
          </div>
        </div>
      );
    }