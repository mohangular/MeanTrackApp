export class timeSheetEntry {
    _id: string;
    date: Date;
    module: string;
    tfsId: string;
    workType: string;
    resourceName: string;
    activity: string;
    hours: number;
    comments: string;
    branch: string;
    build: number;
    MID: string;

    deserialize(input:any):this {
        Object.assign(this,input);
        return this;
    }
}