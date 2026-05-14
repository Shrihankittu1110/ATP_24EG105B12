/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
		*/
        console.log("OTP Sent Successfully")
		let second=10
		let intervalID=setInterval(()=>{
			second--
			console.log("Resend")
		if(second==0){
			console.log("Enable Resend")
			clearInterval(intervalID)
		}},10000)
		