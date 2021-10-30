export interface IPokemon {
  name: string;
  url: string;
}

export interface id {
  id: string;
}

export interface Item {
  item: IPokemon;
}

export interface IOnePokemon {
  abilities: [
    {
      ability: {
        name: string;
      };
    },
    {
      ability: {
        name: string;
      };
    }
  ];
  base_experience: number;
  height: number;
  id: number;
  moves: [];
  name: string;
  sprites: object;
  stats: [
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } },
    { base_stat: number; stat: { name: string } }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    },
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
  weight: number;
}

export interface IDescription {
  base_happiness: string;
  flavor_text_entries: [
    {
      flavor_text: string;
    }
  ];
}

export interface IUser {
  userName: string;
  password: string;
  token: string;
  errorMessage: string;
}
