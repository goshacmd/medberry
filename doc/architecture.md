# Architecture

## General

The Rails application is primarily an API back-end that is consumed by
Ember.js front-end.

Besides the typical request-response flow, different updates are also
delivered to the front-end via websockets.

## Pushers

Update pusher delivers model updates to affected users.

Online status pusher periodically checks and pushes online statuses of
system's doctors and patients.

Queue stats pusher periodically checks and pushes queue stats of
unprocessed consultation requests.

## Services

### Online status service

Status service is responsible for keeping track of online statuses of
the users along with the user's last online appearance.

There is a helper status marker that periodically goes through the list
of users and tells status service to update data on them.

The data from status service is used by other parts of the application —
ranging from consultation request creation to queue cleaning.

### Queue service

Queue service is responsible for tracking the doctor's queue, checking
if the doctor is busy and providing queue stats for specific requests
(stats like request's position in the queue, estimated waiting time,
etc).

## Processors

These are responsible for closing the consultation request/finishing the
consultation if specific criteria are met (e.g finish a consult if
either party was offline for too long).

They are run periodically.
