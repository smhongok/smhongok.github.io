---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /lottery.html

---
<html>
	<Head>
		<Title>Simple Slot Machine</Title>
		
		<script>
			function DoSpin() {
				//All three slot’s images should be randomly selected 
				//and displayed on the page.
				//If all three images match, alert the user of a win.
				
				var money = parseInt(document.getElementsByName('money')[0].value);
				var bet = parseInt(document.getElementsByName('bet')[0].value);
				var slotImages = ["bar.jpg", "cherry.jpg", "donut.jpg", "lemon.jpg"];
				
				if (money > 0) {
					document.getElementsByName('money')[0].value = money - bet;
					//keys: 0=bar, 1=cherry, 2=donut, 3=lemon
					var slotImage1 = Math.floor((Math.random() * 4));
					var slotImage2 = Math.floor((Math.random() * 4));
					var slotImage3 = Math.floor((Math.random() * 4));
				
					document.getElementById('SlotImage1').src = slotImages[slotImage1];
					document.getElementById('SlotImage2').src = slotImages[slotImage2];
					document.getElementById('SlotImage3').src = slotImages[slotImage3];
			
					CheckWinner(slotImage1,slotImage2,slotImage3,money,bet);
				}
				else {
					//out of money
					alert('You lose. Enter more money to keep playing.');
				}	
			}
			
			function CheckWinner(x,y,z,money,bet) {
				if (x == y && x == z) {
					document.getElementsByName('money')[0].value = money + (13 * bet);
					alert('YOU WIN!');
				}
			}
			
			function checkBet() {
				var bet = parseInt(document.getElementsByName('bet')[0].value)
				//check if the user entered a valid numerical bet
				if (isNaN(bet)){
					//bet is not a number
					alert('Please enter bet as a numerical value.');
				}
				else {
					if (bet <= 0){
						// bet too low
						alert('Your bet is too low.');
					}
					else{
						if(bet > parseInt(document.getElementsByName('money')[0].value)){
							//bet too large
							alert('You do not have enough money to place a bet this large.');
						}		
					}
				}
			}
			
			function checkMoney() {
				var money = parseInt(document.getElementsByName('money')[0].value)
				//check if the user entered a valid numerical value for money
				if (isNaN(money)){
					//money is not a number
					alert('Please enter money as a numerical value.');
				}
				else {
					if (money <= 0){
						// money entered was too low
						alert('Please add a valid amount of money to the game.');
					}
				}
			}
		</script>	
	</Head>
	
	<Body>
		<table align="center">
			<tr> 
				<td><img id="SlotImage1" src="bar.jpg" alt="Slot Image #1" style="Width:102px; Height:132px;"></td>
				<td><img id="SlotImage2" src="bar.jpg" alt="Slot Image #2" style="Width:102px; Height:132px;"></td>
				<td><img id="SlotImage3" src="bar.jpg" alt="Slot Image #3" style="Width:102px; Height:132px;"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="button" onclick="DoSpin()" value="Click To Spin"></td>
				<td></td>
			</tr>
			<tr>
				<td>Money:</td>
				<td><input type="text" onchange="checkMoney()" style="width: 100px" name="money" value="20"></td>
				<td></td>
			</tr>
			<tr>
				<td>Bet:</td>
				<td><input type="text" onchange="checkBet()" style="width: 100px" name="bet" value="1"></td>
				<td></td>
			</tr>
		</table>
	</Body>
</html>