import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-file',
  templateUrl: './creation-file.page.html',
  styleUrls: ['./creation-file.page.scss'],
})
export class CreationFilePage implements OnInit {
  fileName: string;
  fileContetnt: string;
  dirName: string;
  dirPath: string;
  result: any;

  constructor(public file: File,public router: Router) { }

  ngOnInit() { }

  importings(){
    this.router.navigateByUrl('/home');
  }

  loadImageFromDevice(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      this.result = reader.result;
    };
    reader.onerror = (error) => {
      alert(error);
    };
  }

  showFile(){
    console.log(this.result);
  }

  writingFile(fileName,fileContetnt,dirName){
    this.fileName = fileName;
    this.fileContetnt = fileContetnt;
    this.dirName = dirName;
    // let result = this.file.createDir(this.file.externalDataDirectory,this.dirName,true);
    let result = this.file.createDir(this.file.externalRootDirectory,this.dirName,true);
    result.then(data =>{
      this.dirPath = data.toURL();
      alert("Directoy created at: "+this.dirPath);
      this.file.writeFile(this.dirPath,this.fileName,this.result,{replace: true});
      alert("File created at: "+this.dirPath);
    }).catch(err=>{
      alert("Error: "+err);
    });

  }
}
