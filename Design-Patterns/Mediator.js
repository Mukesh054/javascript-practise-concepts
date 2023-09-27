function Member(name) {
  this.name = name;
  this.chatRoom = null;
}

Member.prototype.send = function (message, toMember) {
  this.chatRoom.send(message, this, toMember);
};

Member.prototype.receive = function (message, fromMember) {
  console.log(`${fromMember.name} to ${this.name}: ${message}`);
};

function ChatRoom() {
  this.members = {};
}

ChatRoom.prototype.addMember = function (member) {
  this.members[member.name] = member;
  member.chatRoom = this;
};

ChatRoom.prototype.send = function (message, fromMember, toMember) {
  toMember.receive(message, fromMember);
};

const bob = new Member("Bob");
const john = new Member("John");
const tim = new Member("Tim");

const chat = new ChatRoom();

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hey, John", john);
john.send("What's up, Bob", bob);
tim.send("John, are you ok?", john);
