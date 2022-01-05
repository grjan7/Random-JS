var accounteeID=0;

function Accountee(){
  
  accounteeID=accounteeID+1;
  
  this.id=accounteeID;
  this.name="";
  this.dob={date:"", month:"", year:""};
  this.accountType="";
  this.contactNumber="+91 00000 00000";
  this.address={street:"", city:"", postcode:"", state:"", country:""};
  this.initialBalance=0.00;
  this.currentBalance=0.00;
  
  //getter and setter for name
  this.setName=function(name){
    this.name=name;
  },
  this.getName=function(){
    return this.name;
  },
  
  //getter and setter for dob  
  this.setDob=function(date, month, year){
    this.dob.date=date;
    this.dob.month=month;
    this.dob.year=year;
    
  },
  this.getDob=function(){
    return this.dob.date + "-" + this.dob.month + "-" + this.dob.year ;
  },
  
  //getter and setter for accountType
  
  this.setAccountType=function(accountType){
    this.accountType=accountType;
  },
  this.getAccountType=function(){
    return this.accountType;
  },
  
  //getter and setter for contactNumber
  
  this.setContactNumber=function(contactNumber){
    this.contactNumber=contactNumber;
  },
  this.getContactNumber=function(){
    var contactNum=this.contactNumber;
   	var dummyContactNum=contactNum.slice(contactNum.length-4);
    return "+91 XXXXXX" + dummyContactNum;
  },
 
  //getter and setter for address
  
  this.setAddress=function(street, city, postcode, state, country){
    this.address.street=street;
    this.address.city=city;
    this.address.postcode=postcode;
    this.address.state=state;
    this.address.country=country;    
  },
  this.getAddress=function(){ 
   
    return this.address.street + ", " + this.address.city + ", " + this.address.postcode + ", " + this.address.state + ", " + this.address.country;
  },
  
  this.setInitialBalance=function(){
    
    this.initialBalance=this.currentBalance;
  },
  
  this.getInitialBalance=function(){
    
    return this.initialBalance;
    
  },
    
  this.setCurrentBalance=function(amount,transactionType){
   	if(transactionType=="cr"){      
      this.currentBalance +=amount;      
    }
    if(transactionType=="db"){      
      this.currentBalance -=amount;      
    }    
  }
  
  this.getCurrentBalance=function(){    
    return this.currentBalance;   
  } 
  
}

var acc1=new Accountee();

acc1.setName("Ajax");
acc1.setDob(12, "Sep", 1998);
acc1.setContactNumber("+91 90025 21546");
acc1.setAddress("123 Main Street", "Chennai", "600 021", "TN", "India");

//transactions

acc1.setCurrentBalance(5000, "cr");
acc1.setCurrentBalance(12000, "cr");
acc1.setCurrentBalance(120, "db");
acc1.setCurrentBalance(185, "cr");

console.log(acc1.getCurrentBalance());


