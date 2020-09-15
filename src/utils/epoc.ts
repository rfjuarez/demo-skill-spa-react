const dayOfWeek: string[] = new Array<string>("Do","Lu", "Ma", "Mi", "Ju", "Vi", "Sá");
export const epocToShortDay = (epoc: number): string => {
    const d: Date = new Date(epoc * 1000);
    return `${dayOfWeek[d.getDay()]} ${d.getDate()}`;
};

export const epocToLargeDay = (epoc:number):string =>{
    const d: Date = new Date(epoc * 1000);
    return `${dayOfWeek[d.getDay()]} ${d.getDate()}/${d.getMonth()}`;
};