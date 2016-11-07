import { Component, OnInit } from '@angular/core';
import { Chapter } from "../../domain/chapter";
import { guilds } from "../../db/guilds";
import { defenseMeasures } from "../../db/defense-measures";

import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Vadacl } from "../../vadacl/vadacl";

@Component({
  moduleId: module.id,
  selector: 'app-chapter-reactive-form',
  templateUrl: 'chapter-reactive-form.component.html',
  styleUrls: ['chapter-reactive-form.component.css']
})
export class ChapterReactiveFormComponent extends Vadacl implements OnInit {

  chapter: Chapter;
  defenseArray: any = [];
  guildArray: any = [];
  defenseBoxArray: FormArray;

  pageLoaded: boolean = false;

  form: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    super();
  }

  ngOnInit() {
    this.initializeData();
    this.buildForm();
    this.pageLoaded = true
  }

  buildForm() {

    //Create a custom Validator function for the defenses array
    function hasDefenses( formArray: FormArray) {
      let valid = false;
      for( let c in formArray.controls ) {
        if( formArray.controls[c].value == true ) { valid = true }
      }
      return valid == true ? null : { 'noDefenses': { 'noDefenses': true, 'message': 'Chapter must have at least one defense.' } }
    }

    //Construct and populate the defenses FormArray outside of the FormBuilder so we can populate it dynamically
    this.defenseBoxArray = new FormArray( [], hasDefenses );
    for( let d in this.defenseArray ) {
      this.defenseBoxArray.push( new FormControl(( this.chapter.defenses.indexOf( this.defenseArray[d].id ) > -1 )))
    }

    this.form = this.formBuilder.group( {
      'name': [
        this.chapter.name,
        this.applyRules(
          this.chapter,
          'name',
          { minLength: { minLength: 4, message: 'The name must be at least 4 characters.' } }
        )
      ],
      'guild': [
        this.chapter.guildId,
        this.applyRules( this.chapter, 'guild' )
      ],
      'headChapter': [
        this.chapter.headChapter,
        this.applyRules( this.chapter, 'headChapter' )
      ],
      'defenses': this.defenseBoxArray
    } );

  }

  submitForm() {
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
    this.changeControlValue( this.form.controls[ 'name' ], '999' );
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
