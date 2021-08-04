describe('helpers tests', function() {

    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('sumPaymentTotal() should return correct totals', function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
      });

    it('calculateTipPercent() should calculate correct rounded tip percent', function() {
        
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(100, 0)).toEqual(0);
        expect(calculateTipPercent(100, 110)).toEqual(110);
        expect(calculateTipPercent(57, 17)).toEqual(30);
    })

    it('appendTd() should create td and append given data to new table row', function () {

        let x = document.createElement('tr');

        appendTd(x, 'pickles');

        expect(x.children[0].innerText).toEqual('pickles');
    })

    it('should create delete button on serverTable', function() {
        let tr = document.createElement('tr');

        appendDeleteBtn(tr);

        expect(tr.firstChild.innerHTML).toEqual('X');
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })






})