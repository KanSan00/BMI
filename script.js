document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultBMIDisplay = document.getElementById('resultBMI');
    const resultTypeDisplay = document.getElementById('resultType');
    const resultImg = document.getElementById('img');
    const checkButton = document.getElementById('checkButton');

    // BMIを計算して表示する関数
    const calculateBMI = () => {
        const h = parseFloat(heightInput.value) / 100; // cmをmに変換
        const w = parseFloat(weightInput.value);

        if (h > 0 && w > 0) {
            const bmi = w / (h * h);
            const roundedBMI = Math.round(bmi * 10) / 10;
            resultBMIDisplay.textContent = roundedBMI;
            return roundedBMI;
        }
        return null;
    };

    // 判定ボタンが押された時の処理
    checkButton.addEventListener('click', () => {
        const score = calculateBMI();

        if (score === null) {
            alert("身長と体重を正しく入力してください");
            return;
        }

        let typeText = "";
        let img = "";

        if (score < 18.5) {
            typeText = '低体重：やせすぎ';
            img = "https://4.bp.blogspot.com/-fHP-QIIkZrM/V8qnkaT8AqI/AAAAAAAA9iI/AkpdtT7Wm04iJ6_Tu3QDIEzjFBEsYubNACLcB/s800/body_man_soushin.png";
        } else if (score < 25) {
            typeText = '標準:健康';
            img = "https://4.bp.blogspot.com/-ozhBeke0hm8/V8VE8Hwx0vI/AAAAAAAA9Vk/7D12hDYrsJIECiFq3XJ0X4gCcJECrmoTACLcB/s800/body_man_normal.png";
        } else if (score < 30) {
            typeText = '肥満1：肥満一歩手前';
            img = "https://4.bp.blogspot.com/-a-lsFDjTbNw/XMZ92Zob3RI/AAAAAAABSl0/RBNctkyMpdM1vykUqisYiRI4gZ0vbKlCgCLcBGAs/s800/himan_pocchari_businessman.png";
        } else if (score < 35) {
            typeText = '肥満2：肥満の仲間入り';
            img = "https://1.bp.blogspot.com/-Y245FqUMlWk/UZmCOrAzz4I/AAAAAAAATeQ/pSY8PLmhZVo/s800/metabolic_man.png";
        } else if (score < 40) {
            typeText = '肥満3：肥満人';
            img = "https://1.bp.blogspot.com/-g-uMNDDGaLM/V8VE8ABT27I/AAAAAAAA9Vg/emQo8OVpb_8TeeBq3Ufvg-Ox_h_hJlJAwCLcB/s800/body_man_himan.png"
        } else {
            typeText = '肥満3：肥満の英雄';
            img = "https://4.bp.blogspot.com/-evvzB9SQso8/W8hDuwMX2LI/AAAAAAABPfA/WIYMs2oOTGk4L_H8eghp8q_LO0QKo9XzgCLcBGAs/s450/diet_before_man.png";
        }

        resultTypeDisplay.innerHTML = typeText;
        resultImg.src = img;
    });
});