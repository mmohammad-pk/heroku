import { Component } from '@angular/core';
import 'ecqm-uberbundle/dist/uberbundle.js';
import 'ecqm-uberbundle/dist/web-animations-next-lite.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  columns : Array<any>;
  data : Array<any>;
  breadCrumb: Array<string>;
  breadCrumbTitle : string;
  
  constructor() {
	  console.log('In constructor');
	  this.columns = [{"name": "MEASURE NAME", "fieldName" : "measureName", "type":"string", "sortable":true, "colspan": "4", "show":true},{"name": "VERSION", "fieldName" : "version", "type":"string", "sortable":true, "colspan": "1", "show":true},{"name": "CREATE VERSION/DRAFT", "fieldName" : "createVersion", "type":"icon", "sortable":false, "colspan": "1", "show":true},{"name": "HISTORY", "fieldName" : "history", "type":"icon", "sortable":false, "colspan": "1", "show":true},{"name": "EDIT", "fieldName" : "edit", "type":"icon", "sortable":false, "colspan": "1", "show":true},{"name": "SHARE", "fieldName" : "share", "type":"icon", "sortable":false, "colspan": "1", "show":true},{"name": "CLONE", "fieldName" : "clone", "type":"icon", "sortable":false, "colspan": "1", "show":true},{"name": "DELETE", "fieldName" : "delete", "type":"icon", "sortable":false, "colspan": "1", "show":true},{"name": "EXPORT", "fieldName" : "export", "type":"icon", "sortable":false, "colspan": "1", "show":true}];
    this.data = [{"measureName" : "A","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "B","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "C","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "D","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "E","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "F","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "G","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "H","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "I","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "J","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "K","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "L","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "M","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "N","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "1","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "2","version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"},{"measureName" : "3","version":"14","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"}];
    this.breadCrumb=[];
    this.breadCrumbTitle = "Measure Library";
  }

  onCreateMeasure(e){
    this.data.push({"measureName" : e.detail.detail.measureName,"version":"90","createVersion":"star","history":"history","edit":"editor:mode-edit","share":"social:share","clone":"icons:content-copy","delete":"delete","export":"icons:file-download"});
  }

  onCreateDialogClose(){
    this.breadCrumb=[];
    this.breadCrumbTitle = "Measure Library";
  }

  onCreateDialogOpened(){
    this.breadCrumb = ['Add Measure'];
    this.breadCrumbTitle = 'Add Measure';
  }
  
  ngOnInit(){
	  console.log('In ngOnInit');
  }
}
