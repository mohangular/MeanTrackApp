export class ModuleModel {
    _id: string;
    moduleName: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
