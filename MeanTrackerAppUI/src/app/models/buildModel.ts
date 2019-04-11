export class BuildModel {
    // tslint:disable-next-line:variable-name
    _id: string;
    buildName: string;
    startDate: Date;
    endDate: Date;
    enabled: boolean;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
