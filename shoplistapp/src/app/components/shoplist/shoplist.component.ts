import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {
 
  shoplists;
  trip;
  constructor() { 
    console.log("construct success")
  }

  ngOnInit() {
    console.log("ngOnInit success")
    this.shoplists = [];
  }

  addshoplist(shoplist){
    this.shoplists.push(shoplist);
    console.log("shoplist_pushed")
  }

  createnewtrip(triplocation){
    var trip = new Trip(triplocation);
    this.addshoplist(trip);
  }

  appenditems(itemname,itemtotalprice,itemtotalunit,itemunit,itemtype){
    var unitprice = (parseFloat(itemtotalprice)/parseFloat(itemtotalunit)).toFixed(2);

    if((this.shoplists.length) == 0){
      alert("no trip in the list")
      return false;
    }
    else{
      var item = new Item(itemname,itemtotalprice,itemtotalunit,itemunit,itemtype,unitprice);
      this.shoplists[this.shoplists.length-1].items.push(item)
      console.log("push one item to the list");
    }
    
  }
  deleteitem(item){
    this.shoplists[this.shoplists.length-1].items.splice(this.shoplists[this.shoplists.length-1].items.indexOf(item), 1);
  }
 

}



function Trip(triplocation) {
    this.triplocation = triplocation;
    this.items = [];
    this.tripdate = gettripdate();
  }
  
function Item(itemname, itemtotalprice, itemtotalunit, itemunit, itemtype, unitprice){
      this.itemname = itemname;
      this.itemtotalprice = itemtotalprice;
      this.itemtotalunit = itemtotalunit;
      this.itemunit = itemunit;
      this.itemtype = itemtype;
      this.unitprice = unitprice;
    }

function  gettripdate(){
  var d = new Date();
  return (d.getFullYear().toString() + "/" + d.getMonth().toString() + "/" + d.getDate().toString());
}
