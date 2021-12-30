export interface Movie {
    title: string,
    year: number,
    cast: string,
    genre: string,
    notes: string,
    id: number,
    runningTimes: Time,
}

export interface Time {
    mon: string,
    tue: string,
    wed: string,
    thu: string,
    fri: string,
    sat: string,
    sun: string,

}