import { Publisher, Subjects, TicketCreatedEvent } from '@hltickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
