import { zip, fromEvent } from 'rxjs';

const sender = [];
const receiver = [];
let subscription = { unsubscribe: function() {} };

self.options = {};
self.process = function() {};

fromEvent(self, 'message').subscribe(e => {
  switch (e.data.code) {
    case 'message': {
      send(self.process(e.data.body));
      break;
    }
    case 'options': {
      self.options = e.data.body;
      break;
    }
    case 'receiver': {
      registerReceiver(e.ports[0]);
      combineReceivers();
      break;
    }
    case 'sender': {
      registerSender(e.ports[0]);
      break;
    }
    default: {
      console.error('I don\'t know what i should do?!');
      break;
    }
  }
});

function registerReceiver(port) {
  receiver.push(fromEvent(port, 'message'));
  port.start();
}

function combineReceivers() {
  subscription.unsubscribe();
  subscription = zip(...receiver).subscribe(result => {
    send(self.process(result.map(e => e.data.body)));
  });
}

function registerSender(port) {
  sender.push(port);
}

function send(data) {
  let list = sender;
  if (!list.length) {
    list = [self];
  }
  list.forEach(port => port.postMessage({ body: data }));
}
