export class BuildModel {
    id: number;
    buildName: string;
    startDate: Date;
    endDate: Date;
    enabled: boolean;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
