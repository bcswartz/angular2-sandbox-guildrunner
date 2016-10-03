import { Component, OnInit } from '@angular/core';
import { Chapter } from "../../domain/chapter";
import { guilds } from "../../db/guilds";
import { defenseMeasures } from "../../db/defense-measures";

import {FormControl, FormGroup, FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-chapter-reactive-form',
  templateUrl: 'chapter-reactive-form.component.html',
  styleUrls: ['chapter-reactive-form.component.css']
})
export class ChapterReactiveFormComponent implements OnInit {

  chapter: Chapter;
  defenseArray: any = [];
  guildArray: any = [];
  defenseBoxArray: FormArray;

  form: FormGroup;
  errMsgs: any = {
    name: [],
    guild: [],
    headChapter: [],
    defenses: []
  };

  translations: any = {
    name: {
      required: 'The name is required.',
      minlength: 'The name must be at least 4 characters long.',
      pattern: 'The name can only contain letters.'
    },
    guild: {
      required: 'Please select a guild.'
    },
    headChapter: {
      required: 'Please select either Yes or No.'
    },
    defenses: {
      noDefenses: 'The chapter must implement at least one defensive measure.'
    }
  };

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.initializeData();
    this.buildForm();
  }

  buildForm() {

    //Create a custom Validator function for the defenses array
    function hasDefenses( formArray: FormArray) {
      let valid = false;
      for( let c in formArray.controls ) {
        if( formArray.controls[c].value == true ) { valid = true }
      }
      return valid == true ? null : { noDefenses: true }
    }

    //Construct and populate the defenses FormArray outside of the FormBuilder so we can populate it dynamically
    this.defenseBoxArray = new FormArray( [], hasDefenses );
    for( let d in this.defenseArray ) {
      this.defenseBoxArray.push( new FormControl(( this.chapter.defenses.indexOf( this.defenseArray[d].id ) > -1 )))
    }

    this.form = this.formBuilder.group( {
      'name': [ this.chapter.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z]+')
      ] ],
      'guild': [ this.chapter.guildId, Validators.required ],
      'headChapter': [ this.chapter.headChapter, Validators.required ],
      'defenses': this.defenseBoxArray
    } );

    this.form.valueChanges
      .subscribe( data => this.checkFormValidity( data ) );
  }


  checkFormValidity( data?: any ){
    for( let k in this.errMsgs ) {
      this.errMsgs[k] = [];
      if( this.form.controls[k].errors && this.form.controls[k].dirty ) {  //Yeah, but no telling how many formGroup levels there are.
        for( let e in this.form.controls[k].errors ) {
          if( this.translations[k][e] ) {
            this.errMsgs[k].push( this.translations[k][e] );
          }
        }
      }
    }
  }

  submitForm() {
    this.checkFormValidity()
    if( this.form.valid ) {
      this.chapter.name = this.form.value.name; //value is a key/value map
      this.chapter.guildId = +this.form.value.guild; //need this translated to number, hence +
      this.chapter.headChapter = this.form.value.headChapter === "true";
      this.chapter.defenses = [];
      for( let db in this.defenseBoxArray.controls ) {
        if( this.defenseBoxArray.controls[ db ].value == true ) {
          this.chapter.defenses.push( this.defenseArray[ db ].id )
        }
      }
    }
  }

  resetForm() {
    this.form.reset();
  }

  changeName() {
    this.form.controls['name'].markAsDirty();
    this.form.controls['name'].setValue( '999' );
  }

  initializeData() {
    this.chapter = new Chapter( {
      id: 99,
      guildId: 2,
      name: 'Lobbyists',
      headChapter: null,
      founded: new Date(),
      defenses: [ 1, 3 ],
      location: {
        address: '12 Main Street',
        city: 'New London',
        stateProvince: 'Arkin',
        postalCode: '89000-8901',
        entryPoints: 2,
        floors: 3,
        hasBasement: false,
        rooftopAccess: true
      }
    });

    guilds.forEach( guild => {
      this.guildArray.push( guild );
    });

    defenseMeasures.forEach( defense => {
      this.defenseArray.push( defense );
    });
  }

}
