export class timeSheetEntry {
    id: string;
    date: Date;
    module: string;
    tfsId: string;
    workType: string;
    resourceName: string;
    activity: string;
    noOfHours: number;
    comments: string;
    branch: string;
    buildNo: number;
    MID: string;

    deserialize(input:any):this {
        Object.assign(this,input);
        return this;
    }
}