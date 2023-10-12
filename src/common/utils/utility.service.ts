import { HttpUtilService } from "./http-util.service";
import * as fs from 'fs';
import * as unzipper from "unzipper";
import * as XLSX from 'xlsx';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UtilityService {
    constructor(
        private readonly httpService: HttpUtilService
    ) { }

    async downloadAndUnZip(fileUrl: string, path: string, isZip: boolean) : Promise<string> {
        return new Promise(async (resolve, reject) => {
          try {
    
            let fileNameSplit = fileUrl.split("/");
            let fileName = fileNameSplit.slice(-1)[0];
            let savedFilePath = `/tmp/${fileName}`;
    
            let options = null;
            if (isZip) {
              options = { Accept: 'application/zip' };
            }
            
            let file: NodeJS.ArrayBufferView | string = await this.httpService.get(
              fileUrl, {}, options,
              { responseType: 'arraybuffer' }) as any;
                
              
            fs.writeFileSync(savedFilePath, file);
    
            if (!isZip) {
              return resolve(savedFilePath);
            }
    
            function exitFunction() {
              if (fs.existsSync(savedFilePath)) {
                fs.rmSync(savedFilePath, { recursive: true, force: true });
              }
              resolve(path);
            }
    
            fs.createReadStream(savedFilePath)
              .on("error", (error) => reject(error))
              .pipe(unzipper.Extract({ path: path }))
              .on('close', exitFunction)
              .on("error", (error) => reject(error));
          }
          catch (error) {
            reject(error);
          }
        });
      }

  getWorkSheetToJSon(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const worksheetJson = XLSX.utils.sheet_to_json(worksheet);
    return worksheetJson;
  }

  async createCSVFromArray(data: Array<Array<string>>, filePath : string) {
        
    if (!fs.existsSync(filePath.substring(0, filePath.lastIndexOf('/')))) {
        fs.mkdirSync(filePath.substring(0, filePath.lastIndexOf('/')));
    }

    let writeStream = fs.createWriteStream(filePath);

    data.forEach((row) => {
        writeStream.write(row.toString() + "\n");
    });

    writeStream.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', function () {
            resolve(filePath);
        });

        writeStream.on('error', function (err) {
            reject(err);
        });
    })
  }
  
  checkIOSDevice(userAgent: string) {
    const list = userAgent ? userAgent.split(' ') : [];
    return list.indexOf('ios') !== -1 ? true : false
  }
}