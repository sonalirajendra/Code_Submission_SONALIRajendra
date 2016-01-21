/**
 * 
 */



describe(" checks for ProgressBar3 Service", function() {
  it("checks for ProgressBar3 Service", function() {
    var pBar3Service = function(currValue, num,message,op) {
      return currValue+num;
    };
    var 
        currValue  = 20, 
        num    = 25;
        message='Value Lesser Than Zero';
        op='minus';
    var result = pBar3Service(currValue, num);
    expect(result).toBeGreaterThan(currValue);
    expect(currValue).toBeGreaterThan(0);
    expect(currValue).toBeLessThan(100);
    expect(op).toMatch('minus');
    expect(message).not.toMatch('Value Cannot be lesser than zero');
  });
});



describe("checks for ProgressBar2 Service", function() {
	  it("checks for ProgressBar3 Service", function() {
	    var pBar2Service = function(currValue, num,op) {
	      return num-currValue;
	    };
	    var 
	        currValue  = 20, 
	        num    = 25;
	        op='add';
	    var result = pBar2Service(currValue, num);
	    expect(result).toBeLessThan(currValue);
	    expect(op).not.toMatch('divide');
	  });
	});
