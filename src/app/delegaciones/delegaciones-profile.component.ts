import { Component, OnInit, Input, Output } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-delegaciones-profile',
  templateUrl: './delegaciones-profile.component.html',
  styleUrls: ['./delegaciones-profile.component.css']
})
export class DelegacionesProfileComponent implements OnInit {

  @Input() delegacion : any 
  @Input() convenios : any
  @Input() posts : any
  iconSize : number = 10
  featureEnabled(feature : String) : Boolean {
    return environment.features.enableFollowFeature;
  }
  toggleLike(event : MouseEvent, delegacionId : String) {
    let obj = event.currentTarget as HTMLElement;
    if (obj.classList.contains('btn-outline-secondary')) {
      //follow
      obj.classList.remove('btn-outline-secondary');
      obj.classList.add('btn-primary');
    } else {
      //unfollow
      obj.classList.remove('btn-primary');
      obj.classList.add('btn-outline-secondary');
    }
  }

  getFollowStyling(userId : String, delegacionId : String) : String {
    return (true)? "btn-primary" : "btn-outline-secondary" 
  }
  
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.delegacion.id);
  }

}
