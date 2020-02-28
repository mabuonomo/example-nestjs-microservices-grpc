/* eslint-disable */


export interface Micr1ById {
  id: number;
}

export interface Micr1 {
  id: number;
  name: string;
}

export interface Micr1Service {

  FindOne(request: Micr1ById): Promise<Micr1>;

}
