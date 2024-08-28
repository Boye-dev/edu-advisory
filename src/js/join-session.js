const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

let localStream;
let remoteStream;
let peerConnection;

const servers = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302", // Google's STUN server
    },
  ],
};

document.getElementById("startVideo").onclick = async () => {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideo.srcObject = localStream;

    peerConnection = new RTCPeerConnection(servers);

    localStream
      .getTracks()
      .forEach((track) => peerConnection.addTrack(track, localStream));

    peerConnection.ontrack = (event) => {
      if (!remoteStream) {
        remoteStream = new MediaStream();
        remoteVideo.srcObject = remoteStream;
      }
      remoteStream.addTrack(event.track);
    };

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        // Send the ICE candidate to the remote peer using your server
        // Example: sendMessage('candidate', event.candidate);
      }
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Send the offer to the remote peer using your server
    // Example: sendMessage('offer', offer);
  } catch (error) {
    console.error("Error accessing media devices.", error);
  }
};

document.getElementById("muteVideo").onclick = () => {
  const videoTrack = localStream.getVideoTracks()[0];
  videoTrack.enabled = !videoTrack.enabled;
  document.getElementById("muteVideo").textContent = videoTrack.enabled
    ? "Hide Video"
    : "Show Video";
};

document.getElementById("muteAudio").onclick = () => {
  const audioTrack = localStream.getAudioTracks()[0];
  audioTrack.enabled = !audioTrack.enabled;
  document.getElementById("muteAudio").textContent = audioTrack.enabled
    ? "Mute Audio"
    : "Unmute Audio";
};

document.getElementById("hangUpCall").onclick = () => {
  peerConnection.close();
  localVideo.srcObject = null;
  remoteVideo.srcObject = null;
  localStream.getTracks().forEach((track) => track.stop());
};

// Example of handling incoming messages
// Replace with your actual server logic
function handleMessage(type, message) {
  if (type === "offer") {
    peerConnection.setRemoteDescription(new RTCSessionDescription(message));
    peerConnection.createAnswer().then((answer) => {
      peerConnection.setLocalDescription(answer);
      // Send the answer back to the remote peer
      // Example: sendMessage('answer', answer);
    });
  } else if (type === "answer") {
    peerConnection.setRemoteDescription(new RTCSessionDescription(message));
  } else if (type === "candidate") {
    peerConnection.addIceCandidate(new RTCIceCandidate(message));
  }
}
