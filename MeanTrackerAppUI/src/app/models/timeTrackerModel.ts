import { ActivityModel } from './activityModel';
import { WorkItemModel } from './workItemModel';
import { ModuleModel } from './moduleModel';
import { BuildModel } from './buildModel';
import { timeSheetEntry } from './timeSheetEntry';

export class timeTrackerModel{

    id: number;
    build: BuildModel;
    module: ModuleModel;
    workItem: WorkItemModel;
    acitivity: ActivityModel;
    timeSheet: timeSheetEntry;

    deserialize(input:any):this{
        Object.assign(this,input);
        return this;
    }
}