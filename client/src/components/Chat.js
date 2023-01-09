import '../App.css';
import ChatterMessage from './ChatterMessage';
import UserMessage from './UserMessage';

function Chat() {

  return (
    <>
      <div >
        <div className=' right d-flex justify-content-end'>
          <UserMessage />
        </div>
        <div className=' left d-flex justify-content-start'>
          <ChatterMessage />
        </div>
      </div>
      <div className='textSection'><input type="text"></input><input type="submit"></input></div>
    </>
  );
}

export default Chat;
