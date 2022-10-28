/* eslint-disable no-unused-vars */
import {
  faCalendarDays,
  faGauge,
  faPeopleGroup,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export enum Links {
  Dashboard = 'dashboard',
  Schedule = 'schedule',
  Clients = 'clients',
}

export interface ISidenavLinks {
  title: string;
  to: Links;
  icon: IconDefinition;
}

export const SidenavLinks: ISidenavLinks[] = [
  { title: 'Panel', to: Links.Dashboard, icon: faGauge },
  { title: 'Calendario', to: Links.Schedule, icon: faCalendarDays },
  { title: 'Clientes', to: Links.Clients, icon: faPeopleGroup },
];
