/**
 *设置类
 *@since 2.0
 *@author zhiguo
 *@Date 2018/6/27 17:10
 */
import {SettingStore} from "../store/SettingStore";
import "../util/HardwareMonitor";


const {dialog} = require('electron').remote;
export class SettingService {

    private settingStore: SettingStore;

    constructor(){
        this.settingStore = new SettingStore();
    }

    getProjectPath(): string {
        return this.settingStore.getProjectPath();
    }

    /**
     * 弹出选择路径窗口
     * @returns {string}
     */
    showWindowDialog(): string {
        const projectPaths = dialog.showOpenDialog({properties: ['openDirectory']});
        return projectPaths && projectPaths.length > 0 ? projectPaths[0] : '';
    }


    /**
     * 保存项目路径
     * @param {string} project
     */
    saveProjectPath(projectPath: string): void{
        this.settingStore.saveProjectPath(projectPath);
    }

    checkProjectPath(): boolean {
        this.settingStore.getProjectConfigFilePath();

        return false
    }

    saveOutPutPath(output: string): void {
        this.settingStore.saveOutPutPath(output);
    }


    getOutputPath(): string{
        return this.settingStore.getOutputPath();
    }

    /**
     * 环境监测方法
     * 1.监测项目文件是否存在
     * 2.实时检测进度
     */
    envcheck() {
        //TODO 待实现
    }

}
