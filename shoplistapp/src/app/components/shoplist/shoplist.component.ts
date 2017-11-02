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

  appenditems(itemname,itemtotalprice,itemtotalunit,itemunit){
    var unitprice = (parseFloat(itemtotalprice)/parseFloat(itemtotalunit)).toFixed(2);
    var itemtype = "default"
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

  displaydata(){
    console.log(this.JsonConvert(this.shoplists));
  }


  JsonConvert(shoplists){
    var shoplistjson = '{"shoplists":[\n';
    var tempitemjson;
    for(var i = 0; i < shoplists.length; i++){
            shoplistjson += '{\n';
            shoplistjson += '"triplocation":"' + shoplists[i].triplocation + '",\n';
            shoplistjson += '"tripdate":"'+ shoplists[i].tripdate +'",\n';
            shoplistjson += '"items":[\n';
            for(var k = 0; k < shoplists[i].items.length; k++){
                shoplistjson += '{';
                shoplistjson += '"itemname":"' + shoplists[i].items[k].itemname + '",\n';
                shoplistjson += '"itemtotalprice":"' + shoplists[i].items[k].itemtotalprice + '",\n';
                shoplistjson += '"itemtotalunit":"' + shoplists[i].items[k].itemtotalunit + '",\n';
                shoplistjson += '"itemunit":"' + shoplists[i].items[k].itemunit + '",\n';
                shoplistjson += '"itemtype":"' + shoplists[i].items[k].itemtype + '",\n';
                shoplistjson += '"unitprice":"' + shoplists[i].items[k].unitprice + '",\n';
                shoplistjson += '}\n';
                if(shoplists[i].items[k+1] != null){
                  shoplistjson += ',\n';
                }
            }
            shoplistjson += ']}\n';
            if(shoplists[i+1] != null){
              shoplistjson += ',\n';
            }

    }
    shoplistjson += ']}';
    return shoplistjson;
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


