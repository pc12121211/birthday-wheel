<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let spinResult;</p>
<p class="p2"><br></p>
<p class="p1">function startSpin() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const form = document.getElementById('birthdayForm');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const formData = new FormData(form);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Get user's choices</p>
<p class="p1"><span class="Apple-converted-space">    </span>const choices = {</p>
<p class="p1"><span class="Apple-converted-space">        </span>food: formData.get('food'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>activity: formData.get('activity'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>animal: formData.get('animal')</p>
<p class="p1"><span class="Apple-converted-space">    </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Influence spin based on choices</p>
<p class="p1"><span class="Apple-converted-space">    </span>spinResult = calculateSpinResult(choices);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Trigger spin animation</p>
<p class="p1"><span class="Apple-converted-space">    </span>const spinner = document.getElementById('spinner');</p>
<p class="p1"><span class="Apple-converted-space">    </span>spinner.style.animation = "spin 2s ease-in-out infinite";</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>setTimeout(() =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>spinner.style.animation = ""; // Stop animation</p>
<p class="p1"><span class="Apple-converted-space">        </span>alert("You won: " + spinResult);</p>
<p class="p1"><span class="Apple-converted-space">        </span>sendToGoogleSheet(formData, spinResult);</p>
<p class="p1"><span class="Apple-converted-space">    </span>}, 2000);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function calculateSpinResult(choices) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const outcomes = ["Gift Card", "Extra Day Off", "Free Lunch", "Surprise Box"];</p>
<p class="p1"><span class="Apple-converted-space">    </span>// Here you can add conditions based on choices to influence the outcome</p>
<p class="p1"><span class="Apple-converted-space">    </span>return outcomes[Math.floor(Math.random() * outcomes.length)];</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function sendToGoogleSheet(formData, spinResult) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const data = {</p>
<p class="p1"><span class="Apple-converted-space">        </span>name: formData.get('name'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>email: formData.get('email'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>food: formData.get('food'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>activity: formData.get('activity'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>animal: formData.get('animal'),</p>
<p class="p1"><span class="Apple-converted-space">        </span>spinResult: spinResult</p>
<p class="p1"><span class="Apple-converted-space">    </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>fetch('YOUR_GOOGLE_SHEET_WEBHOOK_URL', {</p>
<p class="p1"><span class="Apple-converted-space">        </span>method: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">        </span>headers: { 'Content-Type': 'application/json' },</p>
<p class="p1"><span class="Apple-converted-space">        </span>body: JSON.stringify(data)</p>
<p class="p1"><span class="Apple-converted-space">    </span>})</p>
<p class="p1"><span class="Apple-converted-space">    </span>.then(response =&gt; response.json())</p>
<p class="p1"><span class="Apple-converted-space">    </span>.then(data =&gt; console.log("Data sent:", data))</p>
<p class="p1"><span class="Apple-converted-space">    </span>.catch(error =&gt; console.error("Error:", error));</p>
<p class="p1">}</p>
</body>
</html>
