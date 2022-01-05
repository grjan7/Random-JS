function MyHistory() {
  this._history = [];
  this._currentIndex = 0;
  
  //back
  this._back = function() {
      let backwardIndex = Number(this._currentIndex) - 1;
      if (backwardIndex >= 0 && backwardIndex < this._history.length) {
        this._currentIndex = backwardIndex;
        console.log(`Back Url: ${this._history[backwardIndex].url}\tDatetime:${this._history[backwardIndex].datetime}`);
      } else {
        let curInd = Number(this._currentIndex);
        console.log(`Nback Url: ${this._history[curInd].url}\tDatetime:${this._history[curInd].datetime}`);
      }

  },

  //forward
  this._forward = function() {
      let forwardIndex = Number(this._currentIndex) + 1;
      if (forwardIndex >= 0 && forwardIndex < Number(this._history.length)) {
        this._currentIndex = forwardIndex;
        console.log(`Forward Url: ${this._history[forwardIndex].url}\tDatetime:${this._history[forwardIndex].datetime}`);
      } else {
        let curInd = Number(this._currentIndex);
        console.log(`Nforward Url: ${this._history[curInd].url}\tDatetime:${this._history[curInd].datetime}`);
      }
   },
   
    //go
   this._go = function(myUrl) {
      let histTime = new Date
      histTime = histTime.getTime();
      let currState = {
        url: myUrl,
        datetime: histTime
      };
      this._history.push(currState);
      this._currentIndex = this._history.length - 1;

      console.log(`Go Url: ${currState.url}\t Time: ${currState.datetime}`);
   }

}

var myhist = new MyHistory();
myhist._go("https://www.mytrail.com/url1");
myhist._go("https://www.mytrail.com/url2");
myhist._go("https://www.mytrail.com/url3");
myhist._go("https://www.mytrail.com/url4");
myhist._back();
myhist._back();
myhist._back();
myhist._back();
myhist._forward();
myhist._forward();
myhist._go("https://www.mytrail.com/url5");
myhist._go("https://www.mytrail.com/url6");
myhist._back();
myhist._back();
myhist._forward();
myhist._forward();

//myhist._history;