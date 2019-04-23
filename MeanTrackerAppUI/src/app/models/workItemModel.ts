export class WorkItemModel {
    _id: string;
    workItemName: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
