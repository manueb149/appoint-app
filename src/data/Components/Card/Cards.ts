import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable no-unused-vars */
export enum Card {
  Clients = 'clients',
  Income = 'income',
  Appointments = 'appointments',
}

export interface ICard {
  name: string;
  id: Card;
  icon: IconDefinition;
}

export const Cards: ICard[] = [];
