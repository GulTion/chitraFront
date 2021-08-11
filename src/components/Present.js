import React from "react";
import { Impress, Step } from "react-impressjs";

export default React.memo(function Present() {
  return (
    <div className="Present">
      <Impress>
        <Step data={{ x: 0, y: 0 }}>
        <h1 className="_2 ">What is Chitr?</h1>
          <h1 className="_1">
          <h1>Drawing Collaboration Tool for RealTime Drawing! ✏</h1>
          </h1>
         
        </Step>

        <Step data={{ y: 1000, scale: 3 }}>
          <h1 className="_2 ">Which Technology is used ?</h1>
          <h1 className="_1 _left">
          <h1>{"=>"} Mongo Express React Node - MERN</h1>
          <h1>{"=>"} Socket.io - for Bidirectional communication between Server and Client</h1>
          <h1>{"=>"} Impressjs - for this Presentation</h1>
          </h1>
        </Step>

        <Step data={{ x: 1000, y: -1000, scale: 5, rotateX: 90, rotateY: 45 }}>
        <h1 className="_2 "> What are the Features ?</h1>
          <h1 className="_1 _left">
            <h1>{"=>"} Two or More user can draw at same time !</h1>
            <h1>{"=>"} Use Very less Internet for  transferring the Data !</h1>
            <h1>{"=>"} User Can Save as many drawings as user want !</h1>
            <h1>{"=>"} Can Share Drawing to anyone to see and draw !</h1>
          </h1>
        </Step>

        <Step data={{ x: 3000, y: 3000, scale: 1,z:1000, rotateX: 90, rotateY: -45,rotateZ:45}}>
          <h1 className="_2">Requirements</h1>
          <h1 className="_1 _left">
            <h1>{"=>"} Server for backend hosting - replit.com</h1>
            <h1>{"=>"} DataBase for Saving the Drawing and user auth - mongodb</h1>
            <h1>{"=>"} Server for frontend hosting - github pages</h1>
            <h1>{"=>"} Domain for website - name.com</h1>
            <h1>{"=>"} Needs Lot of Time and Peace of Mind!</h1>
          </h1>
        </Step>

        <Step data={{x: 5000, y: 3000, scale: 2,rotateX: 90, rotateY: 0, rotateZ:180 }}>
          <h1 className="_2">How it Works? - (Logic)</h1>
          <h1 className="_1 _left">
            <h2>{"=>"}let, we have 2 users A and B! </h2>
            <h2>{"=>"}When user A tries to draw then a Packet[coordination of line] is thrown to the server using socket. </h2>
            <h2>{"=>"}After receiving the Packet , Server saves it and throws the Packet to all the connected drawings of the users using socket</h2>
            <h2>{"=>"}After receiving the Packet at the client side or say user B , client re-renders it and canvas shows that a line is being drawn</h2>
          </h1>
        </Step>

        <Step data={{x: 5000, y: 1000,z:1000, scale: 1,rotateX: 90, rotateY: 90, rotateZ:180 }}>
          <h1 className="_2"> Source Code</h1>
            <h1>{"=>"} <a target={"_blank"} href="https://github.com/GulTion/chitraFront">GulTion/chitraFront - Front End</a></h1>
            <h1>{"=>"} <a target={"_blank"} href="https://github.com/GulTion/chitraBackend">GulTion/chitraBackend - Back End</a></h1>
        </Step>


        <Step data={{x: 5000, y: 1000,z:2000, scale: 1,rotateX: 90, rotateY: 90, rotateZ:90 }}>
          <h1 className="_2">Work done by</h1>
          <h1 className="_1">
          <h1>Designer - Gulshan</h1>
          <h1>FrontEnd Developer - Gulshan</h1>
          <h1>BackEnd Developer - Gulshan</h1>
          </h1>
          
        </Step>

        <Step data={{x: 5000, y: 1000,z:3000, scale: 1,rotateX: 180, rotateY: 180, rotateZ:90 }}>
          <h1 className="_2">Let's GO</h1>
        </Step>




      </Impress>
    </div>
  );
});
