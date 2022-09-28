import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@hltickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
