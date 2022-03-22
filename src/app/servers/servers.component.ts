import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName ="Testserver";
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];
  username = "";
  showSecret = false;
  log = [];


  onToggleDetails (){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
  //  console.log(this.log.length+1);
  }
    
  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus="Server was Created! Name is"+ this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
       
  }

}
