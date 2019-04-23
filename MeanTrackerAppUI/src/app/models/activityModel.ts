export class ActivityModel {
    _id: string;
    activityName: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
