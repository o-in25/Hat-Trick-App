import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Player} from "../../../models/player";
import { ActionSheetController } from '@ionic/angular';
import * as _ from "lodash";
@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.page.html',
  styleUrls: ['./player-stats.page.scss'],
})
export class PlayerStatsPage implements OnInit {
  players: Player[] = undefined;
  dataList: Player[] = undefined;
  offset: number;
  maxBuffer: number;
  // error
  serverError: string = null;
  showSpinner: boolean = false;

  constructor(private apiService: ApiService, private actionSheetController: ActionSheetController) {
      this.dataList = [];
      this.maxBuffer = 25;
      this.offset = 0;
      // load 25 in;
  }


    async sortByRating() {
      this.showSpinner = true;
       this.dataList = [];
       let players = await _.orderBy(this.players, function(player) {
           return player.stats.offense.ptsPerGame
       }, ['desc']);
       this.dataList = players.slice(0, 49);
       this.showSpinner = false;
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Sort By',
            buttons: [{
                text: 'Rating',
                handler: () => {
                    this.sortByRating();

                }
            }, {
                text: 'First Name',
                handler: () => {
                    console.log('Share clicked');
                }
            }, {
                text: 'Last Name',
                handler: () => {
                    console.log('Share clicked');
                }
            },{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }

  refreshData(event) {
      setTimeout(() => {
        console.log('Done');
          this.apiService.getPlayers().subscribe((data: any) => {
            // some arbitrary player to test
            this.players = data;
            // reset the list
            this.dataList = [];
            console.log(data.length);
            for(let i = 0; i < this.maxBuffer; i++) {
              this.dataList.push(this.players[i]);
            }
            this.offset += this.maxBuffer;
          }, (error) => {
            this.serverError = error.message;
          });
          event.target.complete();

        }, 500);
  }

  loadData(event) {
      setTimeout(() => {
        if(this.players != undefined) {
          for(let i = 0; i++ < this.maxBuffer + 1; i++) {
            this.dataList.push(this.players[(i + this.offset - 1)]);
          }
          event.target.complete();

          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if(this.dataList.length == this.players.length) {
            event.target.disabled = true;
          } else {
            this.offset += this.maxBuffer;
          }
        }
      }, 500);
  }

  ngOnInit() {
    this.apiService.getPlayers().subscribe((data: any) => {
      // some arbitrary player to test
      this.players = data;
      for(let i = 0; i < this.maxBuffer; i++) {
        this.dataList.push(this.players[i]);
      }
      console.log(this.dataList);
      this.offset += this.maxBuffer;
    }, (error) => {
      this.serverError = error.message;
    });

  }

}
