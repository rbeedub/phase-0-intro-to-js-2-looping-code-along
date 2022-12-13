
const friends = [];
const holiday = [];


function writeCards(friends,holiday){
  const messages = []
  
  for (let i=0; i < friends.length; i++) {
    const message= (`Thank you, ${friends[i]}, for the wonderful ${holiday} gift!`);
    messages.push(message);
  }
  return messages;
}
  console.log (writeCards(["Guadalupe", "Ollie","Aki"], "birthday"));


let i = [];
function countDown(i) {
  while (i >= 0) {
  console.log(i--);
} 
} 
countDown(10);