---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /lottery.html

---
<html>
<head>
    <title>슬롯머신 당첨 게임</title>
    <style>
        .slot {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            text-align: center;
            line-height: 200px;
            font-size: 36px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <button onclick="spin()">돌리기</button>
    <div id="slot1" class="slot">?</div>
    <div id="slot2" class="slot">?</div>
    <div id="slot3" class="slot">?</div>
    <div id="result"></div>

    <script>
        function spin() {
            const slots = document.querySelectorAll('.slot');
            const result = document.getElementById('result');

            slots.forEach(slot => {
                const randomResult = Math.floor(Math.random() * 3);
                slot.textContent = ['', '', ''][randomResult];
            });

            // 세 개의 슬롯이 모두 같을 때 당첨
            if (slots[0].textContent === slots[1].textContent && slots[1].textContent === slots[2].textContent) {
                result.textContent = '축하합니다! 당첨!';
            } else {
                result.textContent = '아쉽지만, 다음 기회에!';
            }
        }
    </script>
</body>
</html>