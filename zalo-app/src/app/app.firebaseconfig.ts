export var config = {
    apiKey: "AIzaSyBKvdg-gEeem9qemB8lEIxoJSd3QmYEuTw",
    authDomain: "zalofake.firebaseapp.com",
    databaseURL: "https://zalofake.firebaseio.com",
    projectId: "zalofake",
    storageBucket: "zalofake.appspot.com",
    messagingSenderId: "878136459243"
  };
  export const snapshotToArray = snapshot =>{
    let returnArray = [];
    snapshot.forEach(element => {
      let item = element.val();
      returnArray.push(item);
    });
    return returnArray;
  }