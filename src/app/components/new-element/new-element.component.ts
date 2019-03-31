import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { ElementService } from '../../shared/element.service';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {

  public elementForm: FormGroup;
  constructor(
    public elemApi: ElementService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.elemApi.GetElementsList();
    this.eForm();
  }

  eForm(){
    this.elementForm = this.fb.group({
      name: [''],
      profesion: [''],
      cAddress: [''],
      cPhone: [''],
      cEmail: [''],
      r1Name: [''],
      r1Phone: [''],
      r1Email: [''],
      r2Name: [''],
      r2Phone: [''],
      r2Email: [''],
      e1Company: [''],
      e1Roll: [''],
      e1Period: [''],
      e1Descrip: [''],
      e2Company: [''],
      e2Roll: [''],
      e2Period: [''],
      e2Descrip: [''],
      e3Company: [''],
      e3Roll: [''],
      e3Period: [''],
      e3Descrip: [''],
      e4Company: [''],
      e4Roll: [''],
      e4Period: [''],
      e4Descrip: [''],
      s1School: [''],
      s1Docum: [''],
      s1Period: [''],
      s1Descrip: [''],
      s2School: [''],
      s2Docum: [''],
      s2Period: [''],
      s2Descrip: [''],
      s3School: [''],
      s3Docum: [''],
      s3Period: [''],
      s3Descrip: [''],
      s4School: [''],
      s4Docum: [''],
      s4Period: [''],
      s4Descrip: [''],
      skill1: [''],
      skill1D: [''],
      skill2: [''],
      skill2D: [''],
      skill3: [''],
      skill3D: [''],
      skill4: [''],
      skill4D: [''],
      skill5: [''],
      skill5D: [''],
      skill6: [''],
      skill6D: [''],
      skill7: [''],
      skill7D: [''],
      skill8: [''],
      skill8D: [''],
      skill9: [''],
      skill9D: ['']
    });
  }
  resetForm(){
    this.elementForm.reset();
  }

  submitElementData(){
    this.elemApi.AddElement(this.elementForm.value);
    this.resetForm();
  }

  change($event){
    console.log($event.target.value);
  }
}
