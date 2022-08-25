import { Publisher, Subjects, TicketUpdatedEvent } from '@hltickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
