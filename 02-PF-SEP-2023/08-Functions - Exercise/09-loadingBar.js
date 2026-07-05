function loadingBar(n) {
    if (n == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        let percent = n / 10;
        let str = '';

        for (let i = 0; i < 10; i++) {
            if (i < percent) {
                str += '%';
            } else {
                str += '.';
            }
        }
        console.log(`${n}% [${str}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);

