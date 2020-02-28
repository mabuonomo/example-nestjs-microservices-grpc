/* eslint-disable */


export interface Micr2ById {
  id: number;
}

export interface Micr2 {
  id: number;
  name: string;
}

export interface Micr2Service {

  FindOne(request: Micr2ById): Promise<Micr2>;

}
