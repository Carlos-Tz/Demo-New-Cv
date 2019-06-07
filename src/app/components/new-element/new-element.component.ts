import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Element } from '../../shared/element';
import 'fecha';
import fechaObj from 'fecha';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';

import { ElementService } from '../../shared/element.service';


@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {
  public element: Element;
  fecha: string;
  image;
  uploadedImage: Blob;
  
 // public elementForm: FormGroup;
  constructor(
    public elemApi: ElementService,
    public fb: FormBuilder,
    private ng2ImgMax: Ng2ImgMaxService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.fecha = fechaObj.format(new Date(), 'DD[/]MM[/]YYYY');
    this.elemApi.GetElementsList();
    this.eForm();
  }

  eForm(){
    /* this.elementForm = this.fb.group({ */
      this.element = {
      name: 'JASON MARTIN BROWN GARCÍA',
      avatar: '',
      profesion: 'DISEÑADOR GRÁFICO',
      about: 'My name is Jason Martin lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet repudiandae deserunt, eius accusantium nostrum asperiores voluptas minima distinctio unde ducimus molestias reiciendis vero. Voluptate quasi in animi provident veritatis.',
      cAddress: 'Home Address, City Town, Country',
      cPhone: '+ 1234 567 889',
      cEmail: 'jasonMartin@mail.com',
      r1Name: 'JOHNS MICHAEL',
      r1Roll: 'Director, Matrix media limited',
      r1Phone: '+555 123 5566',
      r1Email: 'johnsMichael@mail.com',
      r2Name: 'RYAN CURTIS',
      r2Roll: 'Director, Matrix media limited',
      r2Phone: '+555 123 5566',
      r2Email: 'ryanCurtis@mail.com',
      e1Company: 'Vison multitune.net',
      e1Roll: 'SENIOR WEB DEVELOPER',
      e1Period: '2015 - 2018',
      e1Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      e2Company: 'Soft Tech Lomited',
      e2Roll: 'LEAD WEB DEVELOPER',
      e2Period: '2013 - 2015',
      e2Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      e3Company: 'Creative Corporation',
      e3Roll: 'WEB & GRAPHIC DESIGNER',
      e3Period: '2011 - 2013',
      e3Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      e4Company: 'Vison multitune',
      e4Roll: 'SENIOR WEB DEVELOPER',
      e4Period: '2015 - 2018',
      e4Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      s1School: 'Asian University',
      s1Docum: 'BACHELORS OF ARTS',
      s1Period: '2010 - 2015',
      s1Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      s2School: 'Creative School',
      s2Docum: 'HIGHER SECONDARY EXAMINATION',
      s2Period: '2008 - 2010',
      s2Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      s3School: 'Creative School',
      s3Docum: 'HIGHER SECONDARY EXAMINATION',
      s3Period: '2006 - 2008',
      s3Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      s4School: 'Creative School',
      s4Docum: 'HIGHER SECONDARY EXAMINATION',
      s4Period: '2004 - 2006',
      s4Descrip: 'Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor tfringilla. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      skill1: 0,
      skill1D: 'PHOTOSHOP',
      skill2: 100,
      skill2D: 'ILLUSTRATOR',
      skill3: 50,
      skill3D: 'INDESIGN',
      skill4: 80,
      skill4D: 'MS WORD',
      skill5: 90,
      skill5D: 'MS EXCEL',
      skill6: 20,
      skill6D: 'ANDROID',
      skill7: 60,
      skill7D: 'COREL DRAW',
      skill8: 70,
      skill8D: 'IOS',
      skill9: 40,
      skill9D: 'DISEÑO WEB'
    }
    /* }); */
  }
  /* resetForm(){
    this.elementForm.reset();
  } */

  submitElementData(){
    this.elemApi.AddElement(this.element);
   // this.resetForm();
  }

  change($event){
    console.log($event.target.value);
  }

  add(){
    this.elemApi.AddElement(this.element);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    let ima = inputValue.files[0];
   // let container = inputValue.parentNode;
   // container.file = ima;
    this.ng2ImgMax.compressImage(ima, 0.030).subscribe(
      result => {
        this.uploadedImage = result;
        let myReader: FileReader = new FileReader();
        myReader.readAsDataURL(this.uploadedImage);
        myReader.onload = (e) => {
          this.image = myReader.result;
          this.element.avatar = <string>myReader.result;
          console.log(myReader.result);
        //  container.style.backgroundImage = `url(${myReader.result})`;
        }
        //  myReader.readAsDataURL(ima);
      },
      error => {
        console.log('ߘ Oh no!', error);
      }
    );

  }
}
