import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = ''
  serverCreated = false
  servers = []

  constructor() {
  }

  

  onAddServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true
    setTimeout(() => {
      this.serverCreated = false
      this.serverName = ''
    }, 2000)
  }

  ngOnInit(): void {
  }

}
