import { zip, fromEvent } from 'rxjs';

const sender = [];
const receiver = [];
let subscription;

self.process = function() {};

fromEvent(self, 'message').subscribe(e => {
  if (e.data.code === 'receiver') {
    registerReceiver(e.ports[0]);
    combineReceivers();
  } else if (e.data.code === 'sender') {
    registerSender(e.ports[0]);
  } else {
    send(self.process(e.data.body));
  }
});

function registerReceiver(port) {
  receiver.push(fromEvent(port, 'message'));
  port.start();
}

function combineReceivers() {
  if (subscription) {
    subscription.unsubscribe();
  }
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
