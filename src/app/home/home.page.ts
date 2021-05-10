import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Router } from '@angular/router';
declare const Buffer

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgBlob: any;
  transferObject: FileTransferObject;
  downloadText: any = '';
  fileGenerating: any = '';
  saveFile: any;

  constructor(public file: File, public fileTransfer: FileTransfer,public fileOpner: FileOpener,public router: Router) { }

  openUrl() {
    window.open('https://www.zoom.com', '_system', 'location=yes');
  }

  loadImageFromDevice(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //----base64----
      var imgBase = reader.result.toString();
      console.log("base64: ", imgBase);
      //----buffer----
      (window as any).global = window;
      // @ts-ignore
      window.Buffer = window.Buffer || require('buffer').Buffer;
      var imgBuff =  Buffer.from(imgBase);
      console.log("buffer: ", imgBuff);
      //----Uint8----
      var imgUint = new Uint8Array(imgBuff);
      console.log("Uint8: ", imgUint);
      //----binary----
      var binaryArr = imgUint.buffer;
      console.log("binary: ", binaryArr);
      //----blob----
      var blob = new Blob([binaryArr],{type: 'image/jpeg'});
      console.log("blob: ", blob);
      //----write file----
      this.file.writeFile(this.file.externalRootDirectory,'myImage.jpeg',blob).then(data =>{
        alert("file created!"+data);
        this.fileOpner.open(this.file.externalRootDirectory+'myImage.jpeg','image/jpeg');
      });
    };

    // //direct Method
    // reader.readAsArrayBuffer(file);
    // reader.onload = () => {
    //   //----binary----
    //   var binary = reader.result;
    //   console.log("direct binary: ", binary);
    // };

    reader.onerror = (error) => {
      alert(error);
    };
  }

  downloads() {
    this.downloadText = "downloading...";
    this.transferObject = this.fileTransfer.create();
    this.transferObject.download("https://live.staticflickr.com/734/32948542471_6173c78113_b.jpg", this.file.externalRootDirectory + "leila_lowfire.jpg").then((data) => {
      alert("download complete!");
      this.downloadText = "";
    });
  }

  creation(){
    this.router.navigateByUrl('/creation-file');
  }

}