type charProgress = {
  [key: number]: {
    name: string;
    count: number;
  }[];
}

type cardData = {
  [key: string]: {
    id?: string;
    name: string;
    count: number;
    ids: string[];
    three: string[];
  }[];
}
