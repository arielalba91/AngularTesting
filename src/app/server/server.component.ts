import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
ServerId : number =10;
ServerStatus: string= 'offline';

getServerStatus(){
return this.ServerStatus;

}


}