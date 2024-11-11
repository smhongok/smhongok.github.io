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
				
				//var money = parseInt(document.getElementsByName('money')[0].value);
				//var bet = parseInt(document.getElementsByName('bet')[0].value);
				var slotImages = ["bbae.png", "bbe.png", "ru.png", "ro.png"];
				
				if (1) {
					//document.getElementsByName('money')[0].value = money - bet;
					//keys: 0=bbae, 1=bbe, 2=ru, 3=ro
					var slotImage1 = Math.floor((Math.random() * 4));
					var slotImage2 = Math.floor((Math.random() * 4));
					var slotImage3 = Math.floor((Math.random() * 4));
					if (slotImage1 == 0 && slotImage2 == 0 && slotImage3 == 3) {
                        if (Math.random()<0.90) {
                        	slotImage3 = 2;
                        }
					} 
				
					document.getElementById('SlotImage1').src = slotImages[slotImage1];
					document.getElementById('SlotImage2').src = slotImages[slotImage2];
					document.getElementById('SlotImage3').src = slotImages[slotImage3];
			
					CheckWinner(slotImage1,slotImage2,slotImage3);
				}
				else {
					//out of money
					alert('You lose. Enter more money to keep playing.');
				}	
			}
			
			function CheckWinner(x,y,z) {
				if (x == 0 && y == 0 && z == 3) {
					alert('YOU WIN!');
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
		</table>
	</Body>
</html>