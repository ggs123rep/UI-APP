import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const JoinCreateRoom = ({ uuid, setUser, setRoomJoined }) => {
  const [roomId, setRoomId] = useState(uuid());
  const [name, setName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinRoomId, setJoinRoomId] = useState("");
  const [chooseCreate ,setchooseCreate] = useState("");
  const [chooseJoin ,setchooseJoin] = useState("");

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!name) return toast.dark("Please enter your name!");

    setUser({
      roomId,
      userId: uuid(),
      userName: name,
      host: true,
      presenter: true,
    });
    setRoomJoined(true);
  };
  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (!joinName) return toast.dark("Please enter your name!");

    setUser({
      roomId: joinRoomId,
      userId: uuid(),
      userName: joinName,
      host: false,
      presenter: false,
    });
    setRoomJoined(true);
  };
 
  function joinRoomFunc(){
    setchooseCreate(false)
    setchooseJoin(true)
  }
  function createRoomFunc(){
    setchooseJoin(false)
    setchooseCreate(true)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-5">
            WhiteBoard Application <hr/>
            <p>Please Choose to join or create room</p>
            <div><button onClick={createRoomFunc} class='btn btn-danger'>Create Room</button><button onClick={joinRoomFunc} class='btn btn-primary' style={{marginLeft:50}}>Join Room</button></div>
          </h1>
        </div>
      </div>
  { chooseCreate ? (<><div className="row mx-5 mt-5">
        <div className="col-md-5 p-5  mx-auto">
          <h1 className="text-center text-primary mb-5">Create Room</h1>
          <form onSubmit={handleCreateSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group my-2  align-items-center">
              <input
                type="text"
                className="form-control border-0 outline-0"
                value={roomId}
                readOnly={true}
                style={{
                  boxShadow: "none",
                  zIndex: "0 !important",
                  fontsize: "0.89rem !important",
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary  border-0 btn-sm"
                  type="button"
                  onClick={() => setRoomId(uuid())}
                >
                  Generate
                </button>
                &nbsp;&nbsp;
               
              </div>
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="form-control btn btn-danger">
                Create Room
              </button>
            </div>
          </form>
        
          </div>
          </div>
          </>) :(<div></div>)}
     {
      chooseJoin ? (<>
       <div className="col-md-5 p-5  mx-auto">
          <h1 className="text-center text-primary mb-5">Join Room</h1>
          <form onSubmit={handleJoinSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={joinName}
                onChange={(e) => setJoinName(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control outline-0"
                value={joinRoomId}
                onChange={(e) => setJoinRoomId(e.target.value)}
                placeholder="Room Id"
                style={{
                  boxShadow: "none",
                }}
              />
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="form-control btn btn-primary">
                Join Room
              </button>
            </div>
          </form>
          </div>
          </>):(<div></div>)
     }
      
      </div>
  );
};

export default JoinCreateRoom;
