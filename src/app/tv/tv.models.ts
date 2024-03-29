export interface ShowResponse {
  score: number;
  show: Show;
}

export interface Embedded {
  episodes: Episode[];
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image?: any;
  summary?: string;
  _links: Links;
}

export interface ShowDetails extends Show {
  _embedded: Embedded;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered?: string;
  officialSite?: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel?: Network;
  externals: Externals;
  image?: Image;
  summary?: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Self;
  previousepisode?: Self;
  nextepisode?: Self;
}

export interface Self {
  href: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average?: number;
}

export interface Schedule {
  time: string;
  days: string[];
}
