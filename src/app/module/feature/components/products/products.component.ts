import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { mensPantsPage1 } from 'src/Data/Pants/men-page';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filterdata : any 
  singleFilterData : any
  men_Pant: any;

  constructor(private router: Router,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.filterdata = filters;
    this.singleFilterData = singleFilter
    this.men_Pant = mensPantsPage1
  }

  handleMultipleSelectFilter(value:String,sectionId:any){
    const queryParams = {...this.activatedRoute.snapshot.queryParams}
    const filterValues = queryParams[sectionId]? queryParams[sectionId].split(','):[]
    const valueIndex = filterValues.indexOf(value);

    if(valueIndex!=-1){
      filterValues.splice(valueIndex,1)
    }else{
      filterValues.push(value)
    }

    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(",")
    }else{
      delete queryParams[sectionId];
    }

    this.router.navigate([],{queryParams})

  }

  handleSingleSelectFilter(value:String,sectionId:any){
    const queryParams = {...this.activatedRoute.snapshot.queryParams}
    queryParams[sectionId] = value;

    this.router.navigate([],{queryParams})

  }

}
