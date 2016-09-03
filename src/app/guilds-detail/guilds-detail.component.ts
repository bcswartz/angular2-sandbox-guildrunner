import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GuildService } from '../guild.service';
import { Guild } from '../domain/guild';
import { HttpResponse } from '../domain/http-response';

@Component({
  moduleId: module.id,
  selector: 'app-guilds-detail',
  templateUrl: 'guilds-detail.component.html',
  styleUrls: ['guilds-detail.component.css']
})
export class GuildsDetailComponent implements OnInit {

  guild: Guild;
  status: any = {
    name: { errors: []},
    incorporationYear: { errors: [] },
    email: { errors: [] }
  };

  serviceErrors: string[];

  constructor(
    private guildService: GuildService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.forEach( (params: Params ) => {
        let id = params['id'] ? +params['id'] : null ;  //converts param string to number
        if( id ) {
          this.guildService.getGuild( id )
            .then( ( serviceResponse: HttpResponse ) => {
              if( serviceResponse.ok ) {
                this.guild = serviceResponse.data.guild;
              } else {
                this.serviceErrors = serviceResponse.errors;
              }
            });
        } else {
          this.guild = new Guild();
        }
      })
  }

  checkFix( propertyName: string ) {
    if( this.status[ propertyName ].errors.length > 0 ) {
      this.checkValidity( propertyName );
    }
  }

  isFormInvalid() {
    let formInvalid = false;
    for( let property in this.status ) {
      if( this.status[ property ].errors.length > 0 ) {
        formInvalid = true;
        break;
      }
    }
    return formInvalid;
  }

  checkValidity( propertyName: string ) {

      let yearRegEx = /[1-2]\d{3}$/;
      let emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

      switch( propertyName ) {
        case 'name':
          this.status.name.errors = [];
          if( !this.guild[ propertyName ] ) {
            this.status.name.errors.push( 'The name field is required.' );
            break;
          }
          if( this.guild[ propertyName ].length < 5 ) {
            this.status.name.errors.push( 'The guild name is too short.' );
          }
          break;
        case 'incorporationYear':
          this.status.incorporationYear.errors = [];
          if( !this.guild[ propertyName ] ) {
            this.status.incorporationYear.errors.push( 'The year of incorporation is required.' );
            break;
          }
          if( isNaN( +this.guild[ propertyName ] ) ) {
            this.status.incorporationYear.errors.push( 'The incorporation year must be a number.' );
          } else {
            if( !yearRegEx.test( this.guild[ propertyName ] ) ) {
              this.status.incorporationYear.errors.push( 'The incorporation year must a valid 4-digit year (1xxx or 2xxx).' );
            }
          }
          break;
        case 'email':
          this.status.email.errors = [];
          if( !emailRegEx.test( this.guild[ propertyName ] ) ) {
            this.status.email.errors.push( 'Please enter a valid email address.' );
          }
          break;
      }

  }

  goBack() {
    window.history.back();
  }

  submitForm() {
    this.serviceErrors = null;
    for( let property in this.status ) {
      this.checkValidity( property );
    }
    if( !this.isFormInvalid() ) {
      this.guildService
        .saveGuild( this.guild )
        .then( ( serviceResponse: HttpResponse ) => {
          if( serviceResponse.ok ) {
            this.guild = serviceResponse.data.guild;
            window.history.back();
          } else {
            this.serviceErrors = serviceResponse.errors;
          }
        });
    }
  }

  clearForm() {
    this.guild.name = null;
    this.guild.incorporationYear = null ;
    this.guild.email = null;
    for( let property in this.status ) {
      this.status[ property ].errors = [];
    }
  }

}
